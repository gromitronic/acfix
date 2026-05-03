import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function listFiles(directory) {
  return readdirSync(join(root, directory)).flatMap((entry) => {
    const relative = join(directory, entry);
    const absolute = join(root, relative);
    return statSync(absolute).isDirectory() ? listFiles(relative) : [relative];
  });
}

test("build version is 0.012 and visible in footer", () => {
  assert.match(read("package.json"), /"version": "0\.012"/);
  assert.match(read("src/data/site.ts"), /BUILD_VERSION = "0\.012"/);
  assert.match(read("components/SiteFooter.tsx"), /Build \{BUILD_VERSION\}/);
});

test("provided ACFix logo is used in the site chrome", () => {
  const chrome = `${read("components/SiteHeader.tsx")}\n${read("components/SiteFooter.tsx")}`;
  assert.match(chrome, /\/acfix-logo\.png/);
  assert.doesNotThrow(() => read("public/acfix-logo.png"));
});

test("ten seed blog posts are configured", () => {
  const blog = read("src/data/blog.ts");
  const slugs = [...blog.matchAll(/slug: "/g)];
  assert.equal(slugs.length, 10);
});

test("blog post dates are within the past six months", () => {
  const blog = read("src/data/blog.ts");
  const dates = [...blog.matchAll(/publishedAt: "(\d{4}-\d{2}-\d{2})"/g)].map((match) => match[1]);
  const today = new Date("2026-05-03T00:00:00Z");
  const sixMonthsAgo = new Date("2025-11-03T00:00:00Z");

  assert.equal(dates.length, 10);

  for (const date of dates) {
    const publishedAt = new Date(`${date}T00:00:00Z`);
    assert.ok(publishedAt <= today, `${date} should not be future-dated`);
    assert.ok(publishedAt >= sixMonthsAgo, `${date} should be within six months`);
  }
});

test("each seed blog post has a cover image entry", () => {
  const blog = read("src/data/blog.ts");
  const imageBlocks = [...blog.matchAll(/images: \[([\s\S]*?)\n    \],/g)];
  assert.equal(imageBlocks.length, 10);

  for (const [, block] of imageBlocks) {
    assert.equal([...block.matchAll(/placement: "cover"/g)].length, 1);
    assert.match(block, /alt: "/);
    assert.match(block, /prompt:/);
  }
});

test("blog image captions are public-facing and terminology accurate", () => {
  const blog = read("src/data/blog.ts");
  const blogImage = read("components/BlogImage.tsx");
  const noiseImageBlock = blog.match(/alt: "Homeowner looking at an indoor HVAC air handler"[\s\S]*?src: "\/images\/woman-looking-at-hvac-system\.jpg"[\s\S]*?prompt:\s*\n\s*"[^"]+"/)?.[0] || "";
  const captionBlock = blogImage.match(/<figcaption[\s\S]*?<\/figcaption>/)?.[0] || "";

  assert.match(blog, /alt: "Homeowner looking at an indoor HVAC air handler"/);
  assert.match(noiseImageBlock, /Unusual AC noises can come from indoor or outdoor equipment/);
  assert.doesNotMatch(noiseImageBlock, /outdoor AC condenser/);
  assert.doesNotMatch(noiseImageBlock, /safe distance/);
  assert.doesNotMatch(captionBlock, /image\.purpose|image\.placement/);
});

test("required routes exist", () => {
  for (const route of [
    "app/page.tsx",
    "app/[areaSlug]/page.tsx",
    "app/ac-repair-port-st-lucie/page.tsx",
    "app/blog/page.tsx",
    "app/blog/[slug]/page.tsx",
    "app/contact/page.tsx",
    "app/privacy/page.tsx",
    "app/terms/page.tsx",
    "app/portal/page.tsx",
    "app/api/leads/route.ts",
    "app/api/portal/leads/route.ts",
    "app/api/portal/vendors/route.ts",
    "app/robots.ts",
    "app/sitemap.ts"
  ]) {
    assert.doesNotThrow(() => read(route), `${route} should exist`);
  }
});

test("owner-required hero, trust strip, form choices, and Port St. Lucie SEO copy are present", () => {
  const home = read("app/page.tsx");
  const hero = read("components/home/Hero.tsx");
  const trust = read("components/home/TrustStrip.tsx");
  const leadForm = read("components/LeadForm.tsx");
  const cityData = read("src/data/cities.ts");
  const cityPage = read("app/ac-repair-port-st-lucie/page.tsx");

  for (const copy of [
    "Fast AC Repair Help Near You",
    "ACFix connects homeowners with local HVAC professionals for repair, tune-ups, and",
    "Check My AC Now",
    "Call Now",
    "Fast response",
    "Local HVAC partners",
    "No obligation",
    "Port St. Lucie pilot area"
  ]) {
    assert.match(`${home}\n${hero}\n${trust}`, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const copy of [
    "AC blowing warm air",
    "AC not turning on",
    "Strange noise",
    "Leaking water",
    "Frozen unit",
    "Maintenance/tune-up",
    "Other",
    "Emergency today",
    "This week",
    "Just looking for estimate",
    "By submitting, you agree to be contacted by ACFix and/or local HVAC partners about your request."
  ]) {
    assert.match(leadForm, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(cityPage, /AC Repair Port St\. Lucie, FL \| Fast Local HVAC Help \| ACFix/);
  assert.match(cityData, /AC Repair Help in Port St\. Lucie, FL/);

  for (const question of [
    "How quickly can someone contact me?",
    "Do you repair AC units directly?",
    "Who performs the service?",
    "Can I request emergency AC repair?",
    "Is there a fee to request help?"
  ]) {
    assert.match(cityData, new RegExp(question.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("county coverage focus includes St. Lucie, Martin, and Palm Beach counties", () => {
  const localSection = read("components/home/LocalSection.tsx");
  const site = read("src/data/site.ts");
  const cityData = read("src/data/cities.ts");
  const layout = read("app/layout.tsx");

  for (const copy of ["St. Lucie County", "Martin County", "Palm Beach County"]) {
    assert.match(site, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(cityData, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(localSection, /St\. Lucie, Martin, and Palm/);
  assert.match(layout, /St\. Lucie, Martin, and Palm Beach counties/);
});

test("local SEO pages are configured and internally linked", () => {
  const localSection = read("components/home/LocalSection.tsx");
  const cityData = read("src/data/cities.ts");
  const dynamicPage = read("app/[areaSlug]/page.tsx");
  const sitemap = read("app/sitemap.ts");

  for (const slug of [
    "ac-repair-fort-pierce",
    "ac-repair-stuart",
    "ac-repair-palm-city",
    "ac-repair-hobe-sound",
    "ac-repair-jupiter",
    "ac-repair-palm-beach-gardens",
    "ac-repair-west-palm-beach",
    "ac-repair-boca-raton",
    "ac-repair-st-lucie-county",
    "ac-repair-martin-county",
    "ac-repair-palm-beach-county"
  ]) {
    assert.match(cityData, new RegExp(slug));
  }

  assert.match(localSection, /Local referral pages/);
  assert.match(localSection, /href=\{`\/\$\{area\.slug\}`\}/);
  assert.match(dynamicPage, /generateStaticParams/);
  assert.match(sitemap, /cities\.map/);
});

test("premium redesign components and blog conversion CTAs are wired", () => {
  for (const file of [
    "components/Motion.tsx",
    "components/home/Hero.tsx",
    "components/home/ProblemSection.tsx",
    "components/home/CostSection.tsx",
    "components/home/InfographicSection.tsx",
    "components/home/SolutionSection.tsx",
    "components/home/HowItWorks.tsx",
    "components/home/BlogPreview.tsx",
    "components/home/FinalCTA.tsx"
  ]) {
    assert.doesNotThrow(() => read(file), `${file} should exist`);
  }

  const blogIndex = read("app/blog/page.tsx");
  const blogPost = read("app/blog/[slug]/page.tsx");

  assert.match(blogIndex, /Read More/);
  assert.match(blogIndex, /openGraph/);
  assert.match(blogPost, /Need help with this issue\?/);
  assert.match(blogPost, /Related Articles/);
  assert.match(blogPost, /Get AC Help Now/);
  assert.match(blogPost, /openGraph/);
});

test("PicMind image assets are wired for homepage and blog covers", () => {
  for (const asset of [
    "public/images/rusty-air-conditioner-outdoor-summer.jpg",
    "public/images/weathered-ac-unit-outdoor-setup.jpg",
    "public/images/energy-efficient-air-conditioner-outdoor.jpg",
    "public/images/home-air-conditioning-system-illustration.jpg"
  ]) {
    assert.doesNotThrow(() => read(asset), `${asset} should exist`);
  }

  const problem = read("components/home/ProblemSection.tsx");
  const cost = read("components/home/CostSection.tsx");
  const solution = read("components/home/SolutionSection.tsx");
  const infographic = read("components/home/InfographicSection.tsx");
  const blog = read("src/data/blog.ts");

  assert.match(problem, /rusty-air-conditioner-outdoor-summer\.jpg/);
  assert.match(cost, /weathered-ac-unit-outdoor-setup\.jpg/);
  assert.match(solution, /energy-efficient-air-conditioner-outdoor\.jpg/);
  assert.match(infographic, /home-air-conditioning-system-illustration\.jpg/);
  assert.equal([...blog.matchAll(/src: "\/images\//g)].length, 10);
});

test("labeled campaign images preserve full artwork without hover zoom", () => {
  const campaignVisual = read("components/CampaignVisual.tsx");
  const blogImage = read("components/BlogImage.tsx");

  assert.match(campaignVisual, /aspect-\[16\/9\]/);
  assert.match(campaignVisual, /className="object-contain"/);
  assert.doesNotMatch(campaignVisual, /group-hover:scale/);
  assert.doesNotMatch(blogImage, /group-hover\/image:scale/);
});

test("Supabase-ready lead storage and portal are wired", () => {
  const leadStore = read("lib/leads.ts");
  const leadRoute = read("app/api/leads/route.ts");
  const portalPage = read("app/portal/page.tsx");
  const portalClient = read("components/PortalClient.tsx");
  const portalAuth = read("lib/portalAuth.ts");

  assert.match(leadStore, /acfix_leads/);
  assert.match(leadStore, /acfix_vendors/);
  assert.match(leadStore, /acfix_lead_events/);
  assert.match(leadStore, /project_tag: "acfix-"/);
  assert.match(leadStore, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.match(leadStore, /NEXT_PUBLIC_SUPABASE_URL/);
  assert.match(leadRoute, /createLead\(payload\)/);
  assert.match(portalPage, /robots/);
  assert.match(portalClient, /Email Vendor/);
  assert.match(portalAuth, /ACFIX_PORTAL_TOKEN/);
});

test("Resend lead notification is wired behind env vars", () => {
  const email = read("lib/email.ts");
  const leadRoute = read("app/api/leads/route.ts");
  const readme = read("README.md");

  assert.match(email, /from "resend"/);
  assert.match(email, /RESEND_API_KEY/);
  assert.match(email, /ACFIX_EMAIL_FROM/);
  assert.match(email, /ACFIX_OWNER_EMAIL/);
  assert.match(email, /ACFIX_VENDOR_LEAD_EMAIL/);
  assert.match(leadRoute, /sendLeadNotification\(result\.data\)/);
  assert.match(leadRoute, /email_\$\{notification\.status\}/);
  assert.match(readme, /RESEND_API_KEY/);
  assert.match(readme, /ACFIX_EMAIL_FROM/);
});

test("FAQ and Article schema are wired", () => {
  assert.match(read("lib/schema.ts"), /function faqSchema/);
  assert.match(read("lib/schema.ts"), /function articleSchema/);
  assert.match(read("app/[areaSlug]/page.tsx"), /faqSchema\(city\.faqs\)/);
  assert.match(read("app/ac-repair-port-st-lucie/page.tsx"), /faqSchema\(city\.faqs\)/);
  assert.match(read("app/blog/[slug]/page.tsx"), /articleSchema\(post\)/);
});

test("copy avoids claiming ACFix performs repairs directly", () => {
  const files = [
    ...listFiles("app").filter((file) => file.endsWith(".tsx")),
    ...listFiles("components").filter((file) => file.endsWith(".tsx")),
    ...listFiles("src").filter((file) => file.endsWith(".ts"))
  ];

  const banned = [
    /our technicians/i,
    /we repair/i,
    /we fix/i,
    /our repair team/i,
    /dispatch our/i
  ];

  for (const file of files) {
    const contents = read(file);
    for (const pattern of banned) {
      assert.doesNotMatch(contents, pattern, `${file} contains ${pattern}`);
    }
  }
});
