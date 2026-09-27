import { cn } from "@/lib/utils";

type IllustProps = { className?: string };

export function IllustArticlesEmpty({ className }: IllustProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto w-full max-w-sm", className)}
      role="img"
      aria-label="Illustration of an empty journal shelf with a growing plant"
    >
      <rect x="24" y="40" width="272" height="150" rx="16" className="fill-secondary/80" />
      <rect x="48" y="64" width="88" height="110" rx="6" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="148" y="64" width="88" height="110" rx="6" className="fill-card stroke-border" strokeWidth="1.5" />
      <path d="M250 150c0-28 14-44 36-52-4 30-16 44-36 52Z" className="fill-primary" opacity="0.85" />
      <path d="M250 150c0-24-12-40-28-48 6 28 14 40 28 48Z" className="fill-primary" opacity="0.55" />
      <path d="M250 150V98" className="stroke-foreground/30" strokeWidth="2" strokeLinecap="round" />
      <circle cx="92" cy="118" r="18" className="stroke-border" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M84 118h16M192 100h28M192 116h40M192 132h22" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IllustArchiveEmpty({ className }: IllustProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto w-full max-w-sm", className)}
      role="img"
      aria-label="Illustration of archive volumes waiting to be filled"
    >
      <rect x="40" y="50" width="52" height="130" rx="4" className="fill-primary/15 stroke-primary/30" strokeWidth="1.5" />
      <rect x="102" y="70" width="52" height="110" rx="4" className="fill-primary/25 stroke-primary/35" strokeWidth="1.5" />
      <rect x="164" y="58" width="52" height="122" rx="4" className="fill-primary/40 stroke-primary/40" strokeWidth="1.5" />
      <rect x="226" y="84" width="52" height="96" rx="4" className="fill-card stroke-border" strokeWidth="1.5" strokeDasharray="5 5" />
      <path d="M40 188h238" className="stroke-foreground/20" strokeWidth="2" strokeLinecap="round" />
      <circle cx="252" cy="120" r="10" className="fill-secondary stroke-primary/40" strokeWidth="1.5" />
    </svg>
  );
}

export function IllustSpecialIssues({ className }: IllustProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto w-full max-w-sm", className)}
      role="img"
      aria-label="Illustration of a special-issue concept with botanical accents"
    >
      <rect x="56" y="36" width="208" height="148" rx="18" className="fill-card stroke-border" strokeWidth="1.5" />
      <path d="M56 72h208" className="stroke-border" strokeWidth="1.5" />
      <circle cx="80" cy="54" r="5" className="fill-primary/50" />
      <circle cx="98" cy="54" r="5" className="fill-primary/30" />
      <path d="M88 120c8-28 28-44 52-48-8 32-24 48-52 48Z" className="fill-primary" opacity="0.75" />
      <path d="M180 140c-6-22 4-40 24-52-2 28-8 42-24 52Z" className="fill-primary" opacity="0.45" />
      <path d="M120 156h80" className="stroke-muted-foreground/35" strokeWidth="3" strokeLinecap="round" />
      <path d="M132 168h56" className="stroke-muted-foreground/25" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IllustNotFound({ className }: IllustProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto w-full max-w-sm", className)}
      role="img"
      aria-label="Illustration of a path that trails off among leaves"
    >
      <path
        d="M40 170c40-10 60-40 80-40s40 30 80 30 60-50 100-40"
        className="stroke-primary/35"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 10"
      />
      <path d="M210 88c0-22 12-34 28-40-2 24-10 36-28 40Z" className="fill-primary" opacity="0.8" />
      <path d="M210 88c0-18-10-30-24-36 4 22 10 32 24 36Z" className="fill-primary" opacity="0.5" />
      <circle cx="120" cy="120" r="28" className="fill-secondary stroke-border" strokeWidth="1.5" />
      <text
        x="120"
        y="128"
        textAnchor="middle"
        className="fill-primary"
        style={{ fontSize: "22px", fontFamily: "Georgia, serif", fontWeight: 600 }}
      >
        404
      </text>
    </svg>
  );
}

export function IllustBoardEmpty({ className }: IllustProps) {
  return (
    <svg
      viewBox="0 0 320 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto w-full max-w-md", className)}
      role="img"
      aria-label="Illustration of editorial seats to be announced"
    >
      {[56, 128, 200, 272].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="48" r="22" className={i === 0 ? "fill-primary/20 stroke-primary/40" : "fill-card stroke-border"} strokeWidth="1.5" strokeDasharray={i > 1 ? "4 4" : undefined} />
          <rect x={x - 28} y="82" width="56" height="36" rx="8" className="fill-secondary/70 stroke-border" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  );
}
