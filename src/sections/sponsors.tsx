import { Container, Grid, jsx } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { Image } from "~/components/image";
import { type Sponsor, SPONSORS } from "~/data/sponsors";

type SponsorProps = {
  sponsor: Sponsor;
};

export const SponsorItem: React.FC<SponsorProps> = ({ sponsor }) => (
  <a
    href={sponsor.link}
    rel="noopener noreferrer"
    target="_blank"
    sx={{
      position: "relative",
      justifySelf: "center",
      width: ["calc(100vw - 4rem)", "24rem", "28rem"],
      maxWidth: "100%",
    }}
  >
    <Image
      width="100%"
      height="auto"
      objectFit="contain"
      src={sponsor.image}
      alt={sponsor.name}
    />
  </a>
);

export const Sponsors = () => (
  <Container id="sponsors">
    <AnchorHeading anchor="sponsors" mb="primary">
      Sponsors
    </AnchorHeading>
    <Grid
      columns={[
        1,
        Math.min(SPONSORS.length, 2),
        Math.min(SPONSORS.length, 2),
        Math.min(SPONSORS.length, 3),
      ]}
      gap="primary"
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {SPONSORS.map((sponsor) => (
        <SponsorItem key={sponsor.name} sponsor={sponsor} />
      ))}
    </Grid>
  </Container>
);
