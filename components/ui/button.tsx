import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-green-deep text-primary-foreground shadow-sm hover:bg-green-forest hover:-translate-y-px",
        forest:
          "bg-green-forest text-primary-foreground shadow-sm hover:bg-green-deep hover:-translate-y-px",
        soft: "bg-green-mist text-green-deep hover:bg-green-sage hover:-translate-y-px",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-green-mist",
        outline:
          "border border-green-forest/40 bg-transparent text-green-deep hover:border-green-forest hover:bg-green-mist/60",
        ghost: "text-green-deep hover:bg-green-mist hover:text-green-deep",
        link: "text-green-forest underline-offset-4 hover:text-green-deep hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
