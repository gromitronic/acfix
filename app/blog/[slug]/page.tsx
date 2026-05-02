import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogImage } from "@/components/BlogImage";
import { ArrowIcon } from "@/components/Icon";
import { FinalCTA } from "@/components/home/FinalCTA";
import { articleSchema } from "@/lib/schema";
import { blogPosts, getPostBySlug } from "@/src/data/blog";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.images[0]?.src || "/acfix-logo.png"],
      type: "article"
    }
  };
}

function relatedPosts(slug: string) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, 3);
}

function InlineCta() {
  return (
    <aside className="rounded-[1.5rem] border border-softborder bg-[linear-gradient(135deg,#eaf7ff_0%,#ffffff_100%)] p-5 shadow-sm">
      <p className="text-lg font-black text-navy">Need help with this issue?</p>
      <p className="mt-2 leading-7 text-slate-700">Get connected with a local HVAC partner where available.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/#lead-form"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,107,61,0.24)] transition hover:-translate-y-0.5 hover:bg-service focus:focus-ring"
        >
          Check My AC Now
        </Link>
        <Link
          href="tel:+17725550198"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-service/30 bg-white px-5 py-3 text-sm font-black text-service transition hover:-translate-y-0.5 hover:border-service focus:focus-ring"
        >
          Call Now
        </Link>
      </div>
    </aside>
  );
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = relatedPosts(post.slug);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <article className="section-shell py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-service">
                {post.publishedAt} · {post.readingTime}
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy sm:text-6xl">{post.title}</h1>
              <p className="mt-5 text-xl leading-8 text-slate-700">{post.excerpt}</p>
              <div className="mt-8">
                <BlogImage image={post.images[0]} />
              </div>
            </div>
            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <InlineCta />
              <div className="mt-4 rounded-[1.25rem] border border-softborder bg-white p-4 text-sm leading-6 text-slate-600">
                <p className="font-black text-navy">Referral disclosure</p>
                <p className="mt-2">
                  ACFix is a referral service. Independent local HVAC companies provide any
                  diagnostics, estimates, warranties, scheduling, and service terms.
                </p>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-7 text-lg leading-8 text-slate-700">
            {post.body.map((paragraph, index) => {
              const image = post.images.find((item) => item.placement === `after paragraph ${index + 1}` && item.src);
              const showCta = index > 0 && (index + 1) % 3 === 0;

              return (
                <div key={paragraph} className="grid gap-6">
                  <p>{paragraph}</p>
                  {image ? <BlogImage image={image} /> : null}
                  {showCta ? <InlineCta /> : null}
                </div>
              );
            })}
            <aside className="rounded-[1.5rem] border border-softborder bg-cold p-5 text-sm leading-6 text-slate-700">
              <p className="font-black text-navy">Referral disclosure</p>
              <p className="mt-2">
                ACFix is a referral service, not an HVAC contractor. ACFix may be compensated by
                partner contractors for referrals. Partner contractors control their own estimates,
                diagnostics, service terms, warranties, and schedules.
              </p>
            </aside>
          </div>
        </div>
      </article>

      <section className="section-shell pb-16 sm:pb-24">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-black text-navy">Related Articles</h2>
            <p className="mt-2 leading-7 text-slate-700">More guides for Florida AC questions.</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-black text-service transition hover:text-navy">
            View all posts <ArrowIcon />
          </Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="group overflow-hidden rounded-[1.5rem] border border-softborder bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <BlogImage image={item.images[0]} compact frameless />
              <div className="p-5">
                <h3 className="text-xl font-black leading-tight text-navy group-hover:text-service">{item.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-700">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
      <div className="fixed inset-x-4 bottom-4 z-30 lg:hidden">
        <Link
          href="/#lead-form"
          className="flex min-h-12 items-center justify-center rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(8,43,69,0.28)]"
        >
          Get AC Help Now
        </Link>
      </div>
    </main>
  );
}
