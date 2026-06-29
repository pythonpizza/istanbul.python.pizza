import { useEffect, useState } from "react";
import { Box, Container, Flex, NavLink } from "theme-ui";

import { genericInformation } from "~/data/generic";

import { Logo } from "./logo";

type LinkComponent = React.FC<{ href: string; children: React.ReactNode }>;

const menuItems = [
  { href: "#about", label: "About 🍕" },
  { href: "#cfp", label: "CFP 🙋🏻‍♀️" },
  { href: "/compact-agenda/", label: "Compact agenda 🔗" },
  { href: "#schedule", label: "Program 📅" },
  { href: "#organizers", label: "Organizers 👩🏻" },
  { href: "#venue", label: "Venue 🏰" },
  { href: "#sponsors", label: "Sponsors 💛" },
  { href: "#coc", label: "CoC 💂" },
];

const MenuLink: LinkComponent = ({ href, children }) => {
  return (
    <NavLink
      sx={{
        background:
          "linear-gradient(0deg, #fff .2rem,transparent 0) no-repeat 50%",
        transition: "background-size .3s cubic-bezier(.165,.84,.44,1)",
        backgroundSize: "0 100%",
        p: ".4rem",
        "&:hover": {
          backgroundSize: "100% 100%",
        },
      }}
      mt={["secondary", 0]}
      ml={[0, "secondary"]}
      href={href}
    >
      {children}
    </NavLink>
  );
};

const MenuButton: LinkComponent = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "white",
        color: "primary",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          // transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "primary",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

type MobileMenuLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
};

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({
  href,
  children,
  onClick,
}) => (
  <NavLink
    href={href}
    onClick={onClick}
    sx={{
      color: "white",
      fontSize: "2.8rem",
      lineHeight: 1.15,
      py: ".7rem",
      textShadow: "0 .2rem 1rem rgba(80, 0, 0, 0.22)",
      "&:hover, &:focus": {
        color: "white",
        textDecoration: "underline",
        textUnderlineOffset: ".5rem",
      },
    }}
  >
    {children}
  </NavLink>
);

export const ContentButton: LinkComponent = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "primary",
        color: "white",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "white",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 64em)");
    const closeMenuOnDesktop = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    mediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: isMenuOpen ? 30 : 10,

        width: "100%",
      }}
    >
      <Container
        sx={{
          width: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          color: "white",
          p: "secondary",
        }}
      >
        <Logo />
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          sx={{
            display: ["inline-flex", null, "none"],
            position: "relative",
            zIndex: 40,
            width: "5.2rem",
            height: "5.2rem",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            borderRadius: "50%",
            background: "rgba(237, 67, 55, 0.2)",
            color: "white",
            cursor: "pointer",
            p: 0,
            backdropFilter: "blur(.5rem)",
          }}
        >
          <Box
            as="span"
            sx={{
              position: "relative",
              width: "2.4rem",
              height: ".2rem",
              borderRadius: ".2rem",
              background: isMenuOpen ? "transparent" : "white",
              transition: "background .2s ease",
              "&:before, &:after": {
                content: '""',
                position: "absolute",
                left: 0,
                width: "2.4rem",
                height: ".2rem",
                borderRadius: ".2rem",
                background: "white",
                transition: "transform .2s ease, top .2s ease",
              },
              "&:before": {
                top: isMenuOpen ? 0 : "-.8rem",
                transform: isMenuOpen ? "rotate(45deg)" : "none",
              },
              "&:after": {
                top: isMenuOpen ? 0 : ".8rem",
                transform: isMenuOpen ? "rotate(-45deg)" : "none",
              },
            }}
          />
        </button>
        <Flex
          sx={{
            display: ["none", null, "flex"],
            alignItems: "center",
            flexDirection: "row",
            zIndex: 5,
          }}
          as="nav"
        >
          {menuItems.map(({ href, label }) => (
            <MenuLink key={href} href={href}>
              {label}
            </MenuLink>
          ))}
          <MenuButton href={genericInformation.ticketsUrl}>
            Buy tickets 🎫
          </MenuButton>
        </Flex>
      </Container>
      <Flex
        id="mobile-menu"
        as="nav"
        aria-hidden={!isMenuOpen}
        sx={{
          display: ["flex", null, "none"],
          position: "fixed",
          inset: 0,
          zIndex: 30,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: "secondary",
          py: "primary",
          background: "url(city.png) center / cover",
          color: "white",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-1rem)",
          transition: "opacity .22s ease, transform .22s ease",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundColor: "primary",
            opacity: 0.78,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, mb: "secondary" }}>
          <Logo />
        </Box>
        <Flex
          sx={{
            position: "relative",
            zIndex: 1,
            alignItems: "center",
            flexDirection: "column",
            gap: ".4rem",
          }}
        >
          {menuItems.map(({ href, label }) => (
            <MobileMenuLink key={href} href={href} onClick={closeMenu}>
              {label}
            </MobileMenuLink>
          ))}
          <Box sx={{ mt: "secondary", perspective: "24rem" }}>
            <NavLink
              href={genericInformation.ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              sx={{
                display: "inline-flex",
                px: "2.8rem",
                py: "1.3rem",
                border: "1px solid white",
                borderRadius: "10rem",
                background: "white",
                boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
                color: "primary",
                fontSize: "2rem",
                "&:hover, &:focus": {
                  color: "primary",
                  transform: "translateY(-0.2rem)",
                },
              }}
            >
              Buy tickets 🎫
            </NavLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export const FloatingTicketsButton = () => (
  <NavLink
    href={genericInformation.ticketsUrl}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      position: "fixed",
      right: ["1.2rem", "2rem"],
      bottom: ["1.2rem", "2rem"],
      zIndex: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: ["13.6rem", "16rem"],
      px: ["1.6rem", "2.4rem"],
      py: ["1rem", "1.2rem"],
      border: "1px solid white",
      borderRadius: "10rem",
      background: "primary",
      boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
      color: "white",
      fontSize: ["smallBody", "body"],
      fontWeight: "bold",
      textAlign: "center",
      transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
      "&:hover, &:focus": {
        color: "white",
        transform: "translateY(-0.2rem)",
        boxShadow: "0.8rem 0.6rem 3rem -0.8rem rgba(25, 0, 0, 0.6)",
      },
    }}
  >
    Buy tickets 🎫
  </NavLink>
);
