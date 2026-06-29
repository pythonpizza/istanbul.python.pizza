export const theme = {
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Roboto Mono', sans-serif",
  },
  space: {
    primary: "5rem",
    secondary: "2rem",
  },
  sizes: {
    container: "96rem",
    smallContainer: "72rem",
  },
  colors: {
    text: "#464444",
    background: "#fff",
    primary: "#ed4337",
    white: "#fff",
  },
  fontSizes: {
    large: "8rem",
    heading: "3.5rem",
    body: "2rem",
    smallBody: "1.6rem",
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 500,
  },
  links: {
    nav: {
      userSelect: "none",
      "&:hover, &:focus": {
        color: "white",
      },
    },
  },
  lineHeights: {
    body: 1.3,
    heading: 1.3,
  },
  cards: {
    primary: {
      position: "relative",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

      padding: 2,
      borderRadius: "10rem",
      boxShadow: "0 4px 28px -8px #cac9c9",
    },
  },
  radii: {
    primary: ".8rem",
  },
  text: {
    heading: {
      color: "primary",
      fontFamily: "heading",
      fontSize: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      my: "secondary",
    },
    paragraph: {
      maxWidth: "none !important",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    a: {
      color: "text",
      textDecoration: "none",
      transition: "color .3s",
      "&:hover": {
        color: "primary",
      },
    },
  },
  layout: {
    container: {
      px: "secondary",
      textAlign: "center",
      py: "primary",
    },
    smallContainer: {
      maxWidth: "smallContainer",
      px: "secondary",
      textAlign: "center",
      py: "primary",
    },
  },
};
