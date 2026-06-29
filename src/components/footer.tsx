/** @jsxImportSource theme-ui */
import { Box, Container, Link } from "theme-ui";
import { Image } from "~/components/image";
import { Wave } from "./wave";

const SOCIALS = [
  {
    name: "linkedin",
    icon: "socials/linkedin.png",
    link: "https://www.linkedin.com/company/98334563/",
  },
  {
    name: "mastodon",
    icon: "socials/mastodon.png",
    link: "https://fosstodon.org/@pythonpizza/",
  },
  {
    name: "twitter",
    icon: "socials/twitter.png",
    link: "https://twitter.com/pythonpizzaconf/",
  },
];

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary",
    }}
  >
    <Wave invert />
    <Container>
      {SOCIALS.map((social) => (
        <Link
          as="a"
          sx={{ mx: "secondary" }}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          key={social.name}
        >
          <Image
            width="3.5rem"
            height="3.5rem"
            src={social.icon}
            alt={social.name}
          />
        </Link>
      ))}
    </Container>
  </Box>
);
