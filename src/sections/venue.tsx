import { Box, Container, Grid, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { Image } from "~/components/image";

const venuePhotos = [
  "/venue/pjatk-outside-1.jpeg",
  "/venue/pjatk-outside-2.jpeg",
  "/venue/pjatk-inside-1.jpeg",
  "/venue/pjatk-inside-2.jpeg",
  "/venue/pjatk-inside-3.jpeg",
  "/venue/pjatk-inside-4.jpeg",
];

export const Venue = () => (
  <Container id="venue" variant="smallContainer" sx={{ textAlign: "left" }}>
    <AnchorHeading anchor="venue" sx={{ textAlign: "center" }}>
      Venue
    </AnchorHeading>

    <Paragraph>
      📍 <b>PJAIT building A, Auditorium, Koszykowa 86, Warsaw, Poland</b>
      <br />
      <a
        href="https://maps.google.com/?q=Koszykowa+86,+Warsaw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Google Maps
      </a>
    </Paragraph>

    <Paragraph sx={{ mb: 2 }}>
      <b>How to get there (Warsaw public transport)</b>
    </Paragraph>
    <Box as="ul" sx={{ mt: 0, mb: "secondary", pl: "2.4rem" }}>
      <Box as="li" sx={{ mb: 2 }}>
        For route planning and live directions, use the Google Maps link above.
      </Box>
      <Box as="li" sx={{ mb: 2 }}>
        About <b>22 minutes on foot</b> from <b>Metro Politechnika</b>.
      </Box>
      <Box as="li">
        About <b>17 minutes on foot</b> from <b>Metro Rondo Daszyńskiego</b>.
      </Box>
    </Box>

    <Paragraph sx={{ mb: 2 }}>
      <b>Arriving by train from other cities</b>
    </Paragraph>
    <Box as="ul" sx={{ mt: 0, mb: "secondary", pl: "2.4rem" }}>
      <Box as="li" sx={{ mb: 2 }}>
        Best arrival station: <b>Warszawa Centralna</b> (main station).
      </Box>
      <Box as="li">
        Also convenient: <b>Warszawa Śródmieście</b>.
      </Box>
    </Box>

    <Grid columns={1} gap={3} sx={{ mt: "secondary" }}>
      {venuePhotos.map((photo, index) => (
        <Image
          key={photo}
          src={photo}
          alt={`PJAIT venue photo ${index + 1}`}
          width="100%"
          sx={{ display: "block" }}
        />
      ))}
    </Grid>
  </Container>
);
