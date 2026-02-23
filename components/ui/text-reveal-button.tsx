"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textRevealButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer overflow-hidden transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TextRevealButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textRevealButtonVariants> {
  asChild?: boolean
  direction?: "ltr" | "rtl"
  duration?: number
}

const TextRevealButton = React.forwardRef<HTMLButtonElement, TextRevealButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      asChild = false,
      direction = "ltr",
      duration = 300,
      ...props
    },
    ref
  ) => {
    const isIconOnly = size === "icon"
    const isLink = variant === "link"
    const skipReveal = isIconOnly || isLink || asChild

    if (skipReveal) {
      const Comp = asChild ? Slot : "button"
      return (
        <Comp
          className={cn(textRevealButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }

    const variantColorMap: Record<string, { base: string; reveal: string; sweep: string }> = {
      default: {
        base: "text-primary-foreground/40",
        reveal: "text-primary-foreground",
        sweep: "bg-primary-foreground/10",
      },
      destructive: {
        base: "text-destructive-foreground/40",
        reveal: "text-destructive-foreground",
        sweep: "bg-destructive-foreground/10",
      },
      outline: {
        base: "text-foreground/40",
        reveal: "text-foreground",
        sweep: "bg-accent/50",
      },
      secondary: {
        base: "text-secondary-foreground/40",
        reveal: "text-secondary-foreground",
        sweep: "bg-secondary-foreground/10",
      },
      ghost: {
        base: "text-foreground/40",
        reveal: "text-foreground",
        sweep: "bg-accent/50",
      },
      link: {
        base: "text-primary/40",
        reveal: "text-primary",
        sweep: "bg-transparent",
      },
    }

    const colors = variantColorMap[variant ?? "default"]

    return (
      <button
        className={cn(textRevealButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Base text - muted */}
        <span
          className={cn(
            "relative z-10 transition-opacity duration-200 group-hover:opacity-0",
            colors.base
          )}
        >
          {children}
        </span>

        {/* Reveal text - slides in */}
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center gap-2",
            "transition-all ease-out",
            direction === "ltr"
              ? "translate-x-[-100%] group-hover:translate-x-0"
              : "translate-x-[100%] group-hover:translate-x-0"
          )}
          style={{ transitionDuration: `${duration}ms` }}
        >
          <span className={cn("relative z-10", colors.reveal)}>{children}</span>
        </span>

        {/* Highlight sweep */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            colors.sweep,
            "transition-transform ease-out",
            direction === "ltr"
              ? "-translate-x-full group-hover:translate-x-0"
              : "translate-x-full group-hover:translate-x-0"
          )}
          style={{ transitionDuration: `${duration}ms` }}
        />
      </button>
    )
  }
)

TextRevealButton.displayName = "TextRevealButton"

export { TextRevealButton, textRevealButtonVariants }
export default TextRevealButton
