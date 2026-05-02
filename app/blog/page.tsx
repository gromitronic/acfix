import type { Metadata } from "next";
import Link from "next/link";
import { BlogImage } from "@/components/BlogImage";
import { ArrowIcon } from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { blogPosts } from "@/src/data/blog";

export const metadata: Metadata = {
  title: "AC Repair Referral Blog | ACFix",
  description: "Helpful ACFix homeowner guides about Florida AC repair, humidity, maintenance, costs, and local HVAC referral requests.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "AC Repair Referral Blog | ACFix",
    description: "Helpful homeowner guides for AC repair questions before requesting local HVAC help.",
    images: ["/acfix-logo.png"]
  }
};

export default function BlogPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="airflow-pattern absolute inset-0 -z-10 opacity-50" />
        <div className="section-shell">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black leading-tight text-navy sm:text-7xl">ACFix blog</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700 sm:text-xl">
              Practical Florida AC guidance that helps homeowners understand common issues before
              requesting independent local HVAC partner follow-up.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-24">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group h-full overflow-hidden rounded-[1.5rem] border border-softborder bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                  <BlogImage image={post.images[0]} compact frameless />
                </Link>
                <div className="grid gap-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-cold px-3 py-1 text-xs font-black text-service">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-500">
                    {post.publishedAt} · {post.readingTime}
                  </p>
                  <h2 className="text-2xl font-black leading-tight text-navy">
                    <Link href={`/blog/${post.slug}`} className="transition group-hover:text-service">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="line-clamp-3 leading-7 text-slate-700">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-black text-coral transition hover:text-service"
                  >
                    Read More <ArrowIcon />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </main>
  );
}
