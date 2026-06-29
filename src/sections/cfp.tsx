import { Box, Container, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { ContentButton } from "~/components/header";

export const CFP = () => (
  <Container id="cfp" variant="smallContainer">
    <AnchorHeading anchor="cfp">
      Call For Proposals is open until <s>April 12 2026, 23:59 CET</s> the end
      of Tuesday, April 14 2026
    </AnchorHeading>
    <Paragraph>
      <a
        href="https://forms.gle/76iATyPAkA3fw2DDA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share
      </a>{" "}
      with us your ideas! Each talk will be 10-minutes long. They can be given
      in person only. We will have a live stream of the event. The applications
      are reviewed on a rolling basis. Apply now to secure a spot and join the
      party 🎊.
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      If you&apos;re not sure which topic you would like to talk about – you can
      send multiple proposals :)
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      We are looking for first-time speakers! It is a good opportunity to get
      started with public speaking with these mini 10-min talks! 🎤
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      We are looking for experienced speakers! It is a great opportunity to
      inspire a new generation of 🐍 loving people!
    </Paragraph>
    <Box sx={{ m: "5rem" }}>
      <ContentButton href="https://forms.gle/76iATyPAkA3fw2DDA">
        Click here to send your Proposal
      </ContentButton>
    </Box>{" "}
  </Container>
);
