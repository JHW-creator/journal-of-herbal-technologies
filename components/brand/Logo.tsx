import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-9 sm:size-10", className)}
      aria-hidden
    >
      <circle cx="24" cy="24" r="23" className="fill-secondary stroke-primary/20" strokeWidth="1" />
      <path
        d="M24 38c0-10 6-16 14-20-2 12-8 18-14 20Z"
        className="fill-primary"
        opacity="0.9"
      />
      <path
        d="M24 38c0-12-7-18-14-22 3 13 8 19 14 22Z"
        className="fill-primary"
        opacity="0.65"
      />
      <path
        d="M24 38V14"
        className="stroke-primary-foreground"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M24 22c3-2 6-3 9-3M24 28c-3-2-6-3-9-3"
        className="stroke-primary-foreground"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          JHT
        </span>
        <span className="font-sans text-[0.7rem] tracking-[0.08em] text-muted-foreground uppercase sm:text-xs">
          Herbal Technologies
        </span>
      </span>
    </span>
  );
}
