import { cn } from "../../lib/cn";

interface PhoneMockupProps {
  screenshot: string;
  alt: string;
  className?: string;
}

export function PhoneMockup({ screenshot, alt, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] rounded-[2.5rem] bg-brand-stone-900 p-3 shadow-2xl",
        className
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-brand-stone-900" />
      {/* Screen */}
      <div className="overflow-hidden rounded-[2rem] bg-white">
        <img
          src={screenshot}
          alt={alt}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
