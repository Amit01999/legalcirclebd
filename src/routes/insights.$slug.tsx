import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Copy, Check, Mail } from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts } from "@/data/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    const idx = posts.findIndex((p) => p.slug === params.slug);
    const prev = idx > 0 ? posts[idx - 1] : null;
    const next = idx < posts.length - 1 ? posts[idx + 1] : null;
    const related = getRelatedPosts(params.slug, 3);
    return { post, prev, next, related };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} — The Legal Circle` },
      { name: "description", content: loaderData?.post.excerpt.slice(0, 160) },
      { property: "og:title", content: loaderData?.post.title },
      { property: "og:description", content: loaderData?.post.excerpt.slice(0, 160) },
    ],
  }),
  component: InsightDetailPage,
});

function FacebookSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InsightDetailPage() {
  const { post, prev, next, related } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const authorDisplay = post.author ?? "The Legal Circle";

  const isPlaceholderExcerpt = /^to read/i.test(post.excerpt.trim());

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const pageUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const pageTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Article ─────────────────────────────────────────── */}
      <section className="pt-36 pb-16">
        <div className="container-lc max-w-[800px]">
          {/* Breadcrumb */}
          <Link
            to="/insights"
            className="mb-8 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition hover:text-brand"
          >
            <ChevronLeft className="h-3 w-3" />
            Insights
          </Link>

          {/* Title */}
          <h1 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl lg:text-[2.6rem]">
            {post.title}
          </h1>

          {/* Meta ─ Author + Published On */}
          <div className="mt-8 grid grid-cols-2 gap-6 border-b border-t border-border py-6">
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Author:
              </p>
              <p className="font-medium text-brand">{authorDisplay}</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Published on:
              </p>
              <p className="font-medium text-brand">{post.date}</p>
            </div>
          </div>

          {/* Excerpt / Body */}
          <div className="mt-8 space-y-4 text-[15px] leading-[1.9] text-gray-700">
            {isPlaceholderExcerpt ? null : (
              post.excerpt.split("\n\n").map((para, i) => (
                <p key={i} className="whitespace-pre-line">
                  {para}
                </p>
              ))
            )}

            {post.url && (
              <p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  {isPlaceholderExcerpt ? "Read the full article →" : "Click here to read more"}
                </a>
              </p>
            )}
          </div>

          {/* Author card */}
          <div className="mt-12 border-t border-border pt-10">
            <h2 className="font-serif text-2xl text-ink">Author</h2>
            <p className="mt-3 font-medium text-brand">{authorDisplay}</p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={handleCopy}
                title={copied ? "Copied!" : "Copy link"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:text-brand"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              <a
                href="mailto:enquiry@legalcirclebd.com"
                title="Email us"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:text-brand"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Share on */}
          <div className="mt-8 flex items-center gap-4 border-b border-border pb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Share on
            </span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-80"
            >
              <FacebookSVG />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition hover:opacity-80"
            >
              <TwitterSVG />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:opacity-80"
            >
              <LinkedInSVG />
            </a>
          </div>
        </div>
      </section>

      {/* ── Previous / Next ──────────────────────────────────── */}
      <section className="bg-[#F7F7F7] py-10">
        <div className="container-lc max-w-[800px]">
          <div className="grid grid-cols-2 gap-6">
            <div>
              {prev && (
                <Link
                  to="/insights/$slug"
                  params={{ slug: prev.slug }}
                  className="group block"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-brand">
                    <ChevronLeft className="h-3 w-3" />
                    Previous Article
                  </div>
                  <p className="font-serif text-base leading-snug text-ink transition group-hover:text-brand line-clamp-2">
                    {prev.title}
                  </p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link
                  to="/insights/$slug"
                  params={{ slug: next.slug }}
                  className="group block"
                >
                  <div className="mb-2 flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-brand">
                    Next Article
                    <ChevronRight className="h-3 w-3" />
                  </div>
                  <p className="font-serif text-base leading-snug text-ink transition group-hover:text-brand line-clamp-2">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── You May Also Like ────────────────────────────────── */}
      <section className="py-16">
        <div className="container-lc max-w-[1000px]">
          <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            You May Also Like
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <article key={r.slug} className="border-t-2 border-brand pt-5">
                <Link
                  to="/insights/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <h3 className="font-serif text-lg leading-snug text-ink transition group-hover:text-brand line-clamp-3">
                    {r.title}
                  </h3>
                </Link>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-brand">
                  Insights
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
