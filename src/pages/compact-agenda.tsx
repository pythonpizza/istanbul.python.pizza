/** @jsxRuntime classic */
/** @jsxImportSource theme-ui */
import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Box, Button, Container, Heading, Link, jsx } from "theme-ui";

import { CompactAgenda, type ColorMode } from "~/components/compact-agenda";
import { SCHEDULE } from "~/data/schedule";

const colorModeStorageKey = "compact-agenda-color-mode";

const getInitialColorMode = (): ColorMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedColorMode = window.localStorage.getItem(colorModeStorageKey);

  if (storedColorMode === "dark" || storedColorMode === "light") {
    return storedColorMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const AgendaPage = () => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");
  const isDark = colorMode === "dark";

  useEffect(() => {
    setColorMode(getInitialColorMode());
  }, []);

  const toggleColorMode = () => {
    setColorMode((currentColorMode) => {
      const nextColorMode = currentColorMode === "dark" ? "light" : "dark";
      window.localStorage.setItem(colorModeStorageKey, nextColorMode);

      return nextColorMode;
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#161313" : "#fffaf9",
        color: isDark ? "#f8ebe8" : "text",
        colorScheme: colorMode,
      }}
    >
      <Head>
        <title>Agenda for May 9, 2026 | Warsaw Python Pizza</title>
        <meta
          name="description"
          content="Compact day-of agenda for Warsaw Python Pizza on May 9, 2026."
        />
      </Head>

      <Container
        sx={{
          width: "100%",
          maxWidth: "56rem",
          px: ["1rem", "secondary"],
          pt: ["1.2rem", "secondary"],
          pb: ["6rem", "7rem"],
        }}
      >
        <Box
          as="header"
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            mx: ["-1rem", "-2rem"],
            mb: "1rem",
            px: ["1rem", "2rem"],
            py: ".9rem",
            backgroundColor: isDark
              ? "rgba(22, 19, 19, .94)"
              : "rgba(255, 250, 249, .94)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid",
            borderBottomColor: isDark ? "#3a2725" : "#f2d1cd",
            display: "grid",
            gridTemplateColumns: "2.5rem minmax(0, 1fr) 2.5rem",
            alignItems: "center",
            gap: ".6rem",
          }}
        >
          <Heading
            as="h1"
            sx={{
              m: 0,
              color: isDark ? "#f8ebe8" : "text",
              fontFamily: "heading",
              fontSize: ["1.25rem", "1.6rem"],
              lineHeight: 1.15,
              gridColumn: 2,
              textAlign: "center",
            }}
          >
            Agenda for Warsaw Python Pizza, May 9 2026
          </Heading>

          <Button
            type="button"
            onClick={toggleColorMode}
            sx={{
              gridColumn: 3,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.5rem",
              height: "2.5rem",
              p: 0,
              border: "1px solid",
              borderColor: "primary",
              borderRadius: "999px",
              backgroundColor: isDark ? "#241b1a" : "white",
              color: "primary",
              cursor: "pointer",
              lineHeight: 1,
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M20.5 14.4A7.8 7.8 0 0 1 9.6 3.5 8.8 8.8 0 1 0 20.5 14.4Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </Button>
        </Box>

        <CompactAgenda schedule={SCHEDULE} colorMode={colorMode} />
      </Container>

      <Link
        as={NextLink}
        href="/"
        sx={{
          position: "fixed",
          right: ["1rem", "1.6rem"],
          bottom: ["1rem", "1.6rem"],
          zIndex: 10,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "4rem",
          height: "4rem",
          border: "1px solid",
          borderColor: "primary",
          borderRadius: "999px",
          backgroundColor: isDark ? "#241b1a" : "white",
          color: "primary",
          boxShadow: isDark
            ? "0 .8rem 2.4rem -1.2rem rgba(0, 0, 0, .8)"
            : "0 .8rem 2.4rem -1.2rem rgba(70, 68, 68, .4)",
          lineHeight: 1,
          transition: "transform .2s, box-shadow .2s",
          "&:hover, &:focus": {
            color: "primary",
            transform: "translateY(-.15rem)",
            boxShadow: isDark
              ? "0 1rem 2.8rem -1.2rem rgba(0, 0, 0, .85)"
              : "0 1rem 2.8rem -1.2rem rgba(70, 68, 68, .5)",
          },
        }}
        aria-label="Go to home page"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          width="21"
          height="21"
        >
          <path
            d="M3 10.5 12 3l9 7.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M5.5 9.5V21h13V9.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M9.5 21v-6h5v6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </Link>
    </Box>
  );
};

export default AgendaPage;
