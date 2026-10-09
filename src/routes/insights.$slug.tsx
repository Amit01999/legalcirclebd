import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Mail,
  UserRound,
} from "lucide-react";
import { getPostBySlug, getRelatedPosts, posts, type InsightBlock } from "@/data/insights";
import { insightSeo, metaFor } from "@/lib/seo";

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
  head: ({ loaderData }) => (loaderData ? { meta: metaFor(insightSeo(loaderData.post)) } : {}),
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

function InsightBodyBlock({ block }: { block: InsightBlock }) {
  if (block.type === "table") {
    return (
      <div>
        {block.heading && (
          <p>
            <strong>{block.heading}</strong>
          </p>
        )}
        <div className="mt-2 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th key={i} scope="col" className="border border-[#DDE3D3] px-3 py-1 font-normal">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="border border-[#DDE3D3] px-3 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "note") {
    return <p className="pt-6 text-center">{block.text}</p>;
  }

  return (
    <p className="whitespace-pre-line">
      {block.heading && <strong>{block.heading}</strong>}
      {block.heading && block.text ? "\n" : null}
      {block.text}
    </p>
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

  const pageUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const pageTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-[#F7F8F4]">
      <section className="relative overflow-hidden border-b border-[#E5E8DF] bg-[#F3F5EF] pt-32 pb-10 md:pt-40 md:pb-12">
        <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
        <div className="container-lc relative max-w-[1080px]">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 border border-[#D9DEC9] bg-white px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#66705D] transition hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Insights
          </Link>

          <div className="mt-6 max-w-[820px]">
            <h1 className="max-w-full break-words font-serif text-3xl leading-[1.16] text-[#252A25] md:text-4xl lg:text-[3rem]">
              {post.title}
            </h1>

            <div className="mt-4 grid border border-[#DDE3D3] bg-white shadow-[0_10px_24px_rgba(36,42,36,0.05)] sm:grid-cols-2">
              <div className="flex gap-3 border-b border-[#E7EBDD] p-4 sm:border-b-0">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDE3D3] bg-[#F8FAF3] text-brand">
                  <UserRound className="h-4 w-4" />
                </span>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[#7B8475]">
                    Author:
                  </p>
                  <p className="text-[15px] font-medium leading-relaxed text-[#252A25]">
                    {authorDisplay}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-4 sm:border-l sm:border-[#E7EBDD]">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDE3D3] bg-[#F8FAF3] text-brand">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[#7B8475]">
                    Published on:
                  </p>
                  <p className="text-[15px] font-medium leading-relaxed text-[#252A25]">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10">
        <div className="container-lc max-w-[820px]">
          <article className="border-t border-[#DDE3D3] pt-6">
            <div className="space-y-4 text-[16px] leading-[1.85] text-[#3F473E]">
              {post.body
                ? post.body.map((block, i) => <InsightBodyBlock key={i} block={block} />)
                : isPlaceholderExcerpt
                  ? null
                  : post.excerpt.split("\n\n").map((para, i) => (
                      <p key={i} className="whitespace-pre-line">
                        {para}
                      </p>
                    ))}

              {post.url && (
                <p className="pt-2">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-brand bg-brand px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.16em] text-white transition hover:border-[#7DA52A] hover:bg-[#7DA52A]"
                  >
                    {isPlaceholderExcerpt
                      ? "Read the full article \u2192"
                      : "Click here to read more"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </p>
              )}
            </div>

            <div className="mt-8 border-y border-[#DDE3D3] py-6">
              <h2 className="font-serif text-2xl text-[#252A25]">Author</h2>
              <p className="mt-2 font-medium text-brand">{authorDisplay}</p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  title={copied ? "Copied!" : "Copy link"}
                  className="flex h-10 w-10 items-center justify-center border border-[#DDE3D3] text-[#6E7668] transition hover:border-brand hover:bg-[#F8FAF3] hover:text-brand"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
                <a
                  href="mailto:enquiry@legalcirclebd.com"
                  title="Email us"
                  className="flex h-10 w-10 items-center justify-center border border-[#DDE3D3] text-[#6E7668] transition hover:border-brand hover:bg-[#F8FAF3] hover:text-brand"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 pb-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#7B8475]">
                Share on
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-8 w-8 items-center justify-center bg-[#1877F2] text-white transition hover:opacity-85"
              >
                <FacebookSVG />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="flex h-8 w-8 items-center justify-center bg-[#1DA1F2] text-white transition hover:opacity-85"
              >
                <TwitterSVG />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="flex h-8 w-8 items-center justify-center bg-[#0A66C2] text-white transition hover:opacity-85"
              >
                <LinkedInSVG />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-[#E5E8DF] bg-[#F3F5EF] py-8">
        <div className="container-lc max-w-[1080px]">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              {prev && (
                <Link
                  to="/insights/$slug"
                  params={{ slug: prev.slug }}
                  className="group block h-full border border-[#DDE3D3] bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_16px_34px_rgba(36,42,36,0.08)]"
                >
                  <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#7B8475] transition group-hover:text-brand">
                    <ChevronLeft className="h-3.5 w-3.5" />
                    Previous Article
                  </div>
                  <p className="font-serif text-lg leading-snug text-[#252A25] transition group-hover:text-brand line-clamp-2">
                    {prev.title}
                  </p>
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link
                  to="/insights/$slug"
                  params={{ slug: next.slug }}
                  className="group block h-full border border-[#DDE3D3] bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_16px_34px_rgba(36,42,36,0.08)] md:text-right"
                >
                  <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#7B8475] transition group-hover:text-brand md:justify-end">
                    Next Article
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                  <p className="font-serif text-lg leading-snug text-[#252A25] transition group-hover:text-brand line-clamp-2">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-lc max-w-[1080px]">
          <h2 className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            You May Also Like
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <article
                key={r.slug}
                className="group border border-[#DDE3D3] bg-[#FBFCF8] p-5 transition hover:-translate-y-0.5 hover:border-brand hover:bg-white hover:shadow-[0_16px_34px_rgba(36,42,36,0.08)]"
              >
                <Link to="/insights/$slug" params={{ slug: r.slug }} className="group block">
                  <h3 className="font-serif text-lg leading-snug text-[#252A25] transition group-hover:text-brand line-clamp-3">
                    {r.title}
                  </h3>
                </Link>
                <p className="mt-4 border-t border-[#DDE3D3] pt-3 text-[10px] uppercase tracking-[0.22em] text-brand">
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
