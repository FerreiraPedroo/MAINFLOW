import React from "react";

interface ImageCellProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

export function ImageCell({ src, alt = "", size = "md" }: ImageCellProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-md object-cover`}
    />
  );
}
