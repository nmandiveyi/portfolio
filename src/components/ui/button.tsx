import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none md:text-[13px]',
  {
    variants: {
      variant: {
        default: 'bg-[var(--accent)] text-[#0d0d0b] hover:bg-[var(--accent2)] hover:-translate-y-px',
        outline:
          'border border-[var(--dim)] text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--text)]',
      },
      size: {
        default: 'px-7 py-3',
        sm: 'px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
