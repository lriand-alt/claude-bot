import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-700 shadow-sm hover:shadow-md disabled:bg-gray-300 dark:disabled:bg-gray-700 focus-visible:ring-green-500",
        secondary:
          "bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 shadow-sm hover:shadow-md disabled:bg-gray-300 dark:disabled:bg-gray-800 focus-visible:ring-gray-500",
        outline:
          "bg-white dark:bg-gray-900 border-2 border-green-500 dark:border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 disabled:opacity-50 focus-visible:ring-green-500",
        ghost:
          "hover:bg-gray-200 dark:hover:bg-gray-800 disabled:opacity-50 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-3 text-base",
        icon: "p-2",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
