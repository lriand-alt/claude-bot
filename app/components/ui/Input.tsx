import { cva, type VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

const inputVariants = cva(
  "w-full border rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 dark:border-gray-700 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
        ghost: "border-transparent bg-transparent focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500",
      },
      inputSize: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-4 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
