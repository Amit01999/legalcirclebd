export function Logo({ withText = false, className = "" }: { withText?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 60 60" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 8 C 18 14, 14 28, 18 42 C 21 50, 28 54, 30 54 C 32 54, 39 50, 42 42 C 46 28, 42 14, 30 8 Z" />
        <path d="M30 8 C 26 18, 24 30, 26 44" />
        <path d="M30 8 C 34 18, 36 30, 34 44" />
        <path d="M22 20 C 28 22, 32 22, 38 20" />
        <path d="M20 32 C 28 34, 32 34, 40 32" />
      </svg>
      {withText && (
        <span className="font-serif text-base tracking-wide text-ink">THE LEGAL CIRCLE</span>
      )}
    </div>
  );
}
