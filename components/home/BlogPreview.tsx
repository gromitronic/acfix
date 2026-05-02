import Link from "next/link";
import { BlogImage } from "@/components/BlogImage";
import { ArrowIcon } from "@/components/Icon";
import { StaggerGroup, StaggerItem } from "@/components/Motion";
import { blogPosts } from "@/src/data/blog";

const featuredSlugs = [
  "ac-blowing-warm-air-port-st-lucie",
  "florida-humidity-ac-problems",
  "repair-or-replace-older-ac-system"
];

export function BlogPreview() {
  const posts = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-black leading-tight text-navy sm:text-5xl">AC help before the call</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">
              Helpful guides that explain common Florida AC problems while keeping the next step clear.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-black text-service transition hover:text-navy">
            View all posts <ArrowIcon />
          </Link>
        </div>
        <StaggerGroup className="mt-9 grid gap-5 md:grid-cols-3">
          {posts.map((post) =>
            post ? (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-[1.5rem] border border-softborder bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <BlogImage image={post.images[0]} compact frameless />
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="rounded-full bg-cold px-3 py-1 text-xs font-black text-service">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-2xl font-black leading-tight text-navy group-hover:text-service">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 leading-7 text-slate-700">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-coral">
                      Read More <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ) : null
          )}
        </StaggerGroup>
      </div>
    </section>
  );
}
