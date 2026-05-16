import clsx from 'clsx'
import type { ElementType, ReactNode } from 'react'

export function Container({
  as: As = 'div',
  className,
  children,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
}) {
  return <As className={clsx('mx-auto w-full max-w-7xl px-6 lg:px-8', className)}>{children}</As>
}
