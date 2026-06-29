import { format } from "date-fns";
import { Box, Flex, Heading, type HeadingProps } from "theme-ui";

import { Wave } from "~/components/wave";
import { genericInformation } from "~/data/generic";

type HeroHeadingProps = HeadingProps & {
  large?: boolean;
};

const HeroHeading: React.FC<HeroHeadingProps> = ({
  children,
  large,
  ...props
}) => (
  <Heading
    {...props}
    sx={{
      fontSize: large ? ["4.2rem", "large"] : ["2rem", "heading"],
      textAlign: "center",
      color: "white",
    }}
  >
    {children}
  </Heading>
);

export const Hero = () => (
  <Flex
    sx={{
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "url(city.png) center / cover",
      minHeight: "100vh",
      position: "relative",
      pt: ["12rem", "20rem", "14rem"],
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "primary",
        opacity: 0.6,
        "@supports (mix-blend-mode: hard-light)": {
          opacity: 1,
          mixBlendMode: "hard-light",
        },
      },
    }}
  >
    <Box
      sx={{
        zIndex: 1,
        m: "auto",
        p: "secondary",
      }}
    >
      <HeroHeading as="h1" large>
        {genericInformation.siteHeading}
      </HeroHeading>
      <HeroHeading m={0} as="h2">
        {genericInformation.subHeading}
      </HeroHeading>
      <HeroHeading m={0} as="h2">
        {format(
          new Date(genericInformation.whenDatetime),
          genericInformation.whenFormat,
        )}
      </HeroHeading>
    </Box>
    <Wave />
  </Flex>
);
