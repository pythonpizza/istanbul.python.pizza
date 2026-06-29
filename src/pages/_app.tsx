import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { ThemeUIProvider } from "theme-ui";

import { theme } from "~/theme";

const App = ({ Component, pageProps }: AppProps) => (
  /* @ts-ignore */
  <ThemeUIProvider theme={theme}>
    <Global
      styles={css`
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }
        body {
          font-size: 2rem;
        }
      `}
    />
    <Component {...pageProps} />
  </ThemeUIProvider>
);

export default App;
