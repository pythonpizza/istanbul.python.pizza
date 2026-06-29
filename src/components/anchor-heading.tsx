import type React from "react";
import { Heading, Link } from "theme-ui";

type AnchorHeadingProps = React.ComponentProps<typeof Heading> & {
  anchor: string;
};

export const AnchorHeading: React.FC<AnchorHeadingProps> = ({
  anchor,
  children,
  ...headingProps
}) => (
  <Heading {...headingProps}>
    <Link
      href={`#${anchor}`}
      sx={{
        color: "inherit",
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {children}
    </Link>
  </Heading>
);
