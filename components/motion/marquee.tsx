import clsx from 'clsx'
import type { ReactNode } from 'react'

export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'group relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]',
        className,
      )}
    >
      <div className="animate-marquee flex shrink-0 items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {children}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex shrink-0 items-center gap-16 pr-16 group-hover:[animation-play-state:paused]"
      >
        {children}
      </div>
    </div>
  )
}
