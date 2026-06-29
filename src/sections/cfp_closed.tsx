import { Container, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";

export const CFP_Closed = () => (
  <Container id="cfp" variant="smallContainer">
    <AnchorHeading anchor="cfp">
      Proposals submission is now closed
    </AnchorHeading>
    <Paragraph>
      We would like to thank everyone who submitted their proposals! We have
      already created the final version of the event schedule.
    </Paragraph>
  </Container>
);
