import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Download,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Tag,
  ArrowLeft,
  FileText,
} from "lucide-react";
import {
  getArticleBySlug,
  getCategoryBySlug,
  getAdjacentArticles,
  getArticlesByCategory,
  type ClientArticle,
} from "@/data/client-articles";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="white">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="white">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const Route = createFileRoute("/client-articles/$category/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Client Portal` },
      { name: "robots", content: "noindex" },
    ],
  }),
  loader: ({ params }) => {
    const article = getArticleBySlug(params.category, params.slug);
    if (!article) throw notFound();
    const cat = getCategoryBySlug(params.category)!;
    const { prev, next } = getAdjacentArticles(article);
    const related = getArticlesByCategory(params.category)
      .filter((a) => a.slug !== params.slug)
      .slice(0, 3);
    return { article, cat, prev, next, related };
  },
  component: ArticleDetailPage,
});

function DocxViewer({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setStatus("loading");
    import("docx-preview")
      .then(({ renderAsync }) =>
        fetch(url)
          .then((r) => r.arrayBuffer())
          .then((buf) =>
            renderAsync(buf, el, undefined, {
              inWrapper: false,
              ignoreWidth: true,
              ignoreLastRenderedPageBreak: true,
            }),
          ),
      )
      .then(() => setStatus("done"))
      .catch(() => setStatus("error"));
  }, [url]);

  return (
    <div>
      {status === "loading" && (
        <div className="flex items-center justify-center gap-3 py-16 text-[#aaa]">
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span className="font-['Merriweather'] text-[13px]">Loading document…</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex flex-col items-center gap-3 py-14 text-center">
          <FileText className="h-10 w-10 text-[#ccc]" />
          <p className="font-['Merriweather'] text-[13px] text-[#999]">
            Unable to preview — please use the Download button below.
          </p>
        </div>
      )}
      <div
        ref={containerRef}
        className={`px-8 py-6 [&_.docx]:outline-none [&_p]:mb-2 [&_p]:font-['Merriweather'] [&_p]:text-[13px] [&_p]:leading-7 [&_p]:text-[#444] [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-[#ddd] [&_td]:px-3 [&_td]:py-2 [&_td]:text-[13px] [&_th]:border [&_th]:border-[#ddd] [&_th]:bg-[#f5f5f5] [&_th]:px-3 [&_th]:py-2 [&_th]:text-[13px] ${status !== "done" ? "hidden" : ""}`}
      />
    </div>
  );
}

function DocViewer({ url }: { url: string }) {
  const ext = url.split(".").pop()?.toLowerCase();

  if (ext === "pdf") {
    return <iframe src={url} title="Document" className="h-[780px] w-full border-0" />;
  }

  if (ext === "docx") {
    return <DocxViewer url={url} />;
  }

  /* .doc — old binary format, cannot be rendered in browser */
  const filename = url.split("/").pop() ?? "document";
  return (
    <div className="flex flex-col items-center gap-5 px-10 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#d0e8a8] bg-[#f6fbee]">
        <FileText className="h-9 w-9 text-[#8cc63f]" />
      </div>
      <div>
        <p className="mb-1 font-['Merriweather'] text-[13px] font-semibold text-[#555]">{filename}</p>
        <p className="font-['Merriweather'] text-[12px] text-[#aaa]">
          Word 97–2003 (.doc) files cannot be previewed in the browser.
        </p>
      </div>
      <p className="font-['Merriweather'] text-[12px] text-[#bbb]">
        Use the Download button below to open this document in Microsoft Word or Google Docs.
      </p>
    </div>
  );
}

function ArticleDetailPage() {
  const { article, cat, prev, next, related } = Route.useLoaderData();
  const { category } = Route.useParams();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-[#f7f8fa] pt-36 pb-20">
      <div className="container-lc max-w-[900px]">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 font-['Merriweather'] text-[11px] uppercase tracking-[0.14em] text-[#aaa]">
          <Link
            to="/client-dashboard"
            className="flex items-center gap-1.5 transition-colors hover:text-[#8cc63f]"
          >
            <ArrowLeft className="h-3 w-3" />
            Dashboard
          </Link>
          <span>/</span>
          <Link
            to="/client-articles/$category"
            params={{ category }}
            className="transition-colors hover:text-[#8cc63f]"
          >
            {cat.label}
          </Link>
          <span>/</span>
          <span className="max-w-[260px] truncate normal-case tracking-normal text-[#888]">
            {article.title}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">

          {/* ── Main column ─────────────────────────────────────────── */}
          <div>
            {/* Title card */}
            <div className="mb-5 border-l-4 border-[#8cc63f] bg-white px-8 py-7 shadow-sm">
              <h1 className="font-['Merriweather'] text-[22px] font-normal leading-[34px] text-[#333]">
                {article.title}
              </h1>
            </div>

            {/* Meta strip */}
            <div className="mb-5 flex flex-wrap items-center gap-6 border border-[#e8e8e8] bg-white px-8 py-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#999]">
                <Calendar className="h-3.5 w-3.5 text-[#8cc63f]" />
                <span className="font-['Merriweather'] text-[12px]">{article.date}</span>
              </div>
              <div className="h-4 w-px bg-[#e8e8e8]" />
              <div className="flex items-center gap-2 text-[#999]">
                <Tag className="h-3.5 w-3.5 text-[#8cc63f]" />
                <Link
                  to="/client-articles/$category"
                  params={{ category }}
                  className="font-['Merriweather'] text-[12px] transition-colors hover:text-[#8cc63f]"
                >
                  {cat.label}
                </Link>
              </div>
            </div>

            {/* Document content */}
            <div className="mb-5 border border-[#e8e8e8] bg-white shadow-sm">
              {article.images ? (
                <div className="flex flex-col gap-6 p-6">
                  {article.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${article.title} — page ${i + 1}`}
                      className="mx-auto w-full max-w-140 shadow-md"
                    />
                  ))}
                </div>
              ) : article.image ? (
                <div className="p-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="mx-auto w-full max-w-140 shadow-md"
                  />
                </div>
              ) : article.fileUrl ? (
                <DocViewer url={article.fileUrl} />
              ) : article.content ? (
                <div
                  className="px-10 py-9 font-['Merriweather'] text-[13px] leading-6.5 text-[#555]
                    [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:border-b [&_h3]:border-[#f0f0f0] [&_h3]:pb-2
                    [&_h3]:text-[14px] [&_h3]:font-semibold [&_h3]:text-[#333]
                    [&_ol]:mt-2 [&_ol]:space-y-1.5 [&_ol]:pl-5
                    [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5
                    [&_li]:text-[13px] [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-[#444]"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : null}
            </div>

            {/* Download */}
            {article.fileUrl && (
              <div className="mb-5 flex items-center justify-center border border-[#e8e8e8] bg-white px-8 py-6 shadow-sm">
                <a
                  href={article.fileUrl}
                  download
                  className="group inline-flex items-center gap-3 bg-[#8cc63f] px-8 py-3 font-['Merriweather'] text-[13px] font-medium text-white shadow-sm transition-all hover:bg-[#7ab834] hover:shadow-md"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Download Document
                </a>
              </div>
            )}

            {/* Share */}
            <div className="mb-5 flex items-center gap-4 border border-[#e8e8e8] bg-white px-8 py-4 shadow-sm">
              <span className="font-['Merriweather'] text-[10px] uppercase tracking-[0.18em] text-[#bbb]">
                Share
              </span>
              <div className="h-4 w-px bg-[#e8e8e8]" />
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded bg-[#3b5998] text-white transition-opacity hover:opacity-80"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded bg-[#1da1f2] text-white transition-opacity hover:opacity-80"
                >
                  <XIcon />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded bg-[#0077b5] text-white transition-opacity hover:opacity-80"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Prev / Next */}
            {(prev || next) && (
              <div className="grid grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    to="/client-articles/$category/$slug"
                    params={{ category, slug: prev.slug }}
                    className="group flex items-start gap-3 border border-[#e8e8e8] bg-white px-5 py-4 shadow-sm transition-shadow hover:border-[#8cc63f]/30 hover:shadow-md"
                  >
                    <ChevronLeft className="mt-0.5 h-4 w-4 shrink-0 text-[#8cc63f]" />
                    <div>
                      <p className="mb-1 font-['Merriweather'] text-[9px] uppercase tracking-[0.16em] text-[#bbb]">
                        Previous
                      </p>
                      <p className="font-['Merriweather'] text-[12px] leading-[18px] text-[#666] group-hover:text-[#8cc63f]">
                        {prev.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    to="/client-articles/$category/$slug"
                    params={{ category, slug: next.slug }}
                    className="group flex items-start justify-end gap-3 border border-[#e8e8e8] bg-white px-5 py-4 text-right shadow-sm transition-shadow hover:border-[#8cc63f]/30 hover:shadow-md"
                  >
                    <div>
                      <p className="mb-1 font-['Merriweather'] text-[9px] uppercase tracking-[0.16em] text-[#bbb]">
                        Next
                      </p>
                      <p className="font-['Merriweather'] text-[12px] leading-[18px] text-[#666] group-hover:text-[#8cc63f]">
                        {next.title}
                      </p>
                    </div>
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#8cc63f]" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </div>

          {/* ── Sidebar ─────────────────────────────────────────────── */}
          <aside className="space-y-5">

            {/* Category */}
            <div className="border border-[#e8e8e8] bg-white shadow-sm">
              <div className="border-b border-[#8cc63f] bg-[#8cc63f]/5 px-5 py-3">
                <p className="font-['Merriweather'] text-[10px] uppercase tracking-[0.16em] text-[#8cc63f]">
                  Category
                </p>
              </div>
              <div className="px-5 py-4">
                <Link
                  to="/client-articles/$category"
                  params={{ category }}
                  className="block font-['Merriweather'] text-[13px] text-[#555] transition-colors hover:text-[#8cc63f]"
                >
                  {cat.label}
                </Link>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="border border-[#e8e8e8] bg-white shadow-sm">
                <div className="border-b border-[#8cc63f] bg-[#8cc63f]/5 px-5 py-3">
                  <p className="font-['Merriweather'] text-[10px] uppercase tracking-[0.16em] text-[#8cc63f]">
                    You May Also Like
                  </p>
                </div>
                <div className="divide-y divide-[#f0f0f0]">
                  {related.map((r: ClientArticle) => (
                    <Link
                      key={r.slug}
                      to="/client-articles/$category/$slug"
                      params={{ category, slug: r.slug }}
                      className="group block px-5 py-4 transition-colors hover:bg-[#f9fbf5]"
                    >
                      <p className="mb-1 font-['Merriweather'] text-[12px] leading-[18px] text-[#555] group-hover:text-[#8cc63f]">
                        {r.title}
                      </p>
                      <p className="font-['Merriweather'] text-[10px] text-[#bbb]">{r.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <Link
              to="/client-articles/$category"
              params={{ category }}
              className="flex w-full items-center justify-center gap-2 border border-[#e8e8e8] bg-white px-5 py-3 font-['Merriweather'] text-[11px] uppercase tracking-[0.14em] text-[#888] shadow-sm transition-colors hover:border-[#8cc63f] hover:text-[#8cc63f]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to {cat.label}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
