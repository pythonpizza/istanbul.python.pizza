/** @jsxRuntime classic */
/** @jsx jsx */
import type React from "react";
import { jsx } from "theme-ui";

type Props = {
  width?: string;
  height?: string;
  src: string;
  alt: string;
  objectFit?: "contain" | "cover";
  layout?: "fill";
  sx?: Record<string, unknown>;
  className?: string;
};

export const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  layout,
  sx,
  className,
}) => {
  let finalWidth = width;
  let finalHeight = height;

  if (layout === "fill") {
    finalWidth = finalHeight = "100%";
  }

  return (
    <img
      src={src}
      alt={alt}
      sx={{ width: finalWidth, height: finalHeight, objectFit, ...sx }}
      className={className}
    />
  );
};
