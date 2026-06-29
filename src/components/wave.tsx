import { Box, jsx } from "theme-ui";

type Props = {
  invert?: boolean;
};

export const Wave: React.FC<Props> = ({ invert = false }) => (
  <Box
    sx={{
      width: "100%",
      margin: "auto 0 0",
      overflow: "hidden",
      zIndex: 2,
      transform: invert ? "scale(-1)" : "",
    }}
  >
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 4320 160"
      sx={{
        display: "block",
        width: "300%",
        fill: "white",
        animation: "wave-animation 30s linear infinite forwards",
        "@keyframes wave-animation": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-66.66%)",
          },
        },
      }}
    >
      <title>Wave</title>
      <path d="M0,160V0c576,0,864,156,1440,156S2304,0,2880,0s864,156,1440,156c1,0,0,4,0,4H0z" />
    </svg>
  </Box>
);
