import { cn } from "../../lib/cn";
import { AppStoreButton } from "./AppStoreButton";
import { PlayStoreButton } from "./PlayStoreButton";

interface StoreButtonsProps {
  className?: string;
}

export function StoreButtons({ className }: StoreButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a href="#" aria-label="Download on the App Store">
        <AppStoreButton />
      </a>
      <a href="#" aria-label="Get it on Google Play">
        <PlayStoreButton />
      </a>
    </div>
  );
}
