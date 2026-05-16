import Image from "next/image";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="PERSCOM"
      width={103}
      height={24}
      className={clsx("h-7 w-auto", className)}
      priority
    />
  );
}
