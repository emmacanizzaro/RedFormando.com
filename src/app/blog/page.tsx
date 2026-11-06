import type { Metadata } from "next";
import Link from "next/link";
import PostImage from "@/components/PostImage";
import PageRibbonRight from "@/components/PageRibbonRight";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | RedFormando",
  description: "Artículos y reflexiones de la Familia Ministerial RedFormando.",
};

export default function BlogPage() {
  return (
    <main className="page-with-ribbon mx-auto w-full max-w-5xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <PageRibbonRight />
      <h1 className="animate-fade-up [--delay:100ms] text-xl font-bold uppercase tracking-wide sm:text-2xl md:text-3xl">
        Blog
      </h1>
      <div
        className="animate-fade-up [--delay:200ms] mt-3 h-0.5 w-12 bg-accent"
        aria-hidden
      />

      <ul className="mt-10 space-y-6">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="animate-fade-up"
            style={{ "--delay": `${300 + i * 150}ms` } as React.CSSProperties}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-5 rounded-3xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-accent/60 hover:bg-white/10 md:grid-cols-[22rem_1fr] md:items-center md:gap-8 md:p-5"
            >
              <PostImage
                src={post.image}
                alt={post.title}
                className="aspect-[1470/768] w-full"
              />
              <div>
                <h2 className="text-lg font-bold sm:text-xl">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] transition-colors group-hover:text-accent">
                  Leer más →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
