import React, { ComponentProps } from "react";
import { variantProps, cva } from "class-variance-authority";

const buttonStyles = cva(["transition-colors"], {
  variants: {}, 
  defaultVariants: {},
});

type ButtonProps = variantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
