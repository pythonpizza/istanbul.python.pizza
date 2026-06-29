import { Container, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";

export const Sponsors = () => (
  <Container id="sponsors">
    <AnchorHeading anchor="sponsors" mb="primary">
      Sponsors
    </AnchorHeading>
    <Paragraph>
      We are looking for sponsors for Warsaw Python Pizza! If you are
      interested, please{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:warsawpythonpizza@gmail.com?subject=[Sponsoring Warsaw Python Pizza]"
      >
        contact us!
      </a>
      .
    </Paragraph>
  </Container>
);
