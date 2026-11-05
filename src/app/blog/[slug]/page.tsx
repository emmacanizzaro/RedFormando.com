import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostImage from "@/components/PostImage";
import { posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post
    ? { title: `${post.title} | RedFormando`, description: post.excerpt }
    : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <Link
        href="/blog"
        className="animate-fade-up text-xs font-medium uppercase tracking-[0.1em] hover:text-accent"
      >
        ← Volver al blog
      </Link>

      <h1 className="animate-fade-up [--delay:250ms] mt-8 text-xl font-bold leading-snug sm:text-2xl md:text-3xl">
        {post.title}
      </h1>

      <PostImage
        src={post.image}
        alt={post.title}
        className="animate-scale-in [--delay:400ms] mt-8 aspect-[1470/768] w-full"
      />

      <div className="animate-fade-up [--delay:600ms] mt-8 space-y-5 text-sm leading-relaxed text-white/80 sm:text-base">
        {post.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </main>
  );
}
