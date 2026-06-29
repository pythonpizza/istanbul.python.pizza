import { Container, Heading, Paragraph } from "theme-ui";
import { jsx } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";

const CocHeading = ({ children, as }) => (
  <Heading
    as={as}
    sx={{ fontSize: "body", color: "text", textAlign: "center" }}
  >
    {children}
  </Heading>
);

export const Coc = () => (
  <Container id="coc" sx={{ textAlign: "left" }} variant="smallContainer">
    <AnchorHeading anchor="coc" sx={{ textAlign: "center" }} as="h1">
      Code of Conduct
    </AnchorHeading>
    <CocHeading as="h2">Purpose</CocHeading>
    <Paragraph>
      Warsaw Python Pizza is dedicated to providing a harassment-free conference
      experience for everyone, regardless of gender, gender identity and
      expression, sexual orientation, disability, physical appearance, body
      size, race, age, religion or lack thereof.{" "}
    </Paragraph>
    <Paragraph>
      We do not tolerate harassment of conference participants in any form.
    </Paragraph>
    <Paragraph>
      Sexual language and imagery is not appropriate for any conference venue,
      including talks.
    </Paragraph>
    <Paragraph>
      We expect all community participants to abide by this Code of Conduct in
      all community venues—online and in-person—as well as in all one-on-one
      communications pertaining to community business.
    </Paragraph>
    <Paragraph>
      <b>
        Conference participants violating these rules may be sanctioned or
        expelled from the conference without a refund at the discretion of the
        conference organisers.
      </b>
    </Paragraph>
    <CocHeading as="h2">Expected Behavior</CocHeading>
    <ul
      sx={{
        pl: 20,
        "li::marker": {
          content: '"✅ "',
          pr: 3,
          pt: 1,
          display: "inline-block",
        },
      }}
    >
      <li>
        Participate in an authentic and active way. In doing so, you contribute
        to the health and longevity of this community.
      </li>
      <li> Exercise consideration and respect in your speech and actions.</li>
      <li> Attempt collaboration before conflict</li>
      <li> Use inclusive language</li>
      <li>
        Refrain from demeaning, discriminatory, or harassing behavior and
        speech.
      </li>
      <li> Be mindful of your surroundings and of your fellow participants.</li>
      <li>
        Alert community leaders if you notice a dangerous situation, someone in
        distress, or violations of this Code of Conduct, even if they seem
        inconsequential.
      </li>
    </ul>
    <CocHeading as="h2">Unacceptable Behavior</CocHeading>
    <Paragraph>
      Unacceptable behaviors include, but is not limited to:
    </Paragraph>
    <ul
      sx={{
        pl: 20,
        "li::marker": {
          content: '"❌ "',
          pr: 3,
          pt: 1,
          display: "inline-block",
        },
      }}
    >
      <li>
        Abusive, discriminatory, derogatory or demeaning speech or actions
      </li>
      <li>Sexual images in public spaces</li>
      <li>Harassing, intimidation, stalking, or following</li>
      <li>Sustained disruption of talks or other events</li>
      <li>Inappropriate physical contact</li>
      <li>Invasion of personal space</li>
      <li>Unwelcome sexual attention</li>
      <li>Advocating for, or encouraging, any of the above behaviour</li>
    </ul>
    <CocHeading as="h2">Consequences of Unacceptable Behavior</CocHeading>
    <Paragraph>
      Unacceptable behavior from any community member, including sponsors and
      those with decision-making authority, will not be tolerated.
    </Paragraph>
    <Paragraph>
      Anyone asked to stop unacceptable behavior is expected to comply
      immediately. If a community member engages in unacceptable behavior, the
      community organizers may take any action they deem appropriate, up to and
      including a temporary ban or permanent expulsion from the community
      without warning (and without refund in the case of a paid event).
    </Paragraph>
    <br />
    <CocHeading as="h2">
      If You Witness or Are Subject to Unacceptable Behavior
    </CocHeading>
    <Paragraph>
      If you are subject to or witness unacceptable behavior, or have any other
      concerns, please notify a community organizer as soon as possible.
    </Paragraph>
    <Paragraph>
      We will publish during the conference information on where to make a
      report.
    </Paragraph>

    <Paragraph>
      When taking a personal report, our staff will ensure you are safe and
      cannot be overheard. They may involve other event staff to ensure your
      report is managed properly.
    </Paragraph>
    <Paragraph>
      Once safe, we’ll ask you to tell us about what happened. This can be
      upsetting, but we’ll handle it as respectfully as possible, and you can
      bring someone to support you. You won’t be asked to confront anyone and we
      won’t tell anyone who you are.
    </Paragraph>
    <Paragraph>
      Our team will be happy to help you contact hotel/venue security, local law
      enforcement, local support services, provide escorts, or otherwise assist
      you to feel safe for the duration of the event.
    </Paragraph>
    <Paragraph>We value your attendance.</Paragraph>
    <CocHeading as="h2">Reporting steps</CocHeading>
    <Paragraph>
      The Warsaw Python Pizza Team is here to help attendees feel safe for the
      duration of Warsaw Python Pizza event. We value your participation. If you
      need to report an incident please reach out to the Team via{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: warsawpythonpizza@gmail.com?subject=[Code of Conduct]"
      >
        email
      </a>
      .
    </Paragraph>

    <CocHeading as="h2">Addressing Grievances</CocHeading>
    <Paragraph>
      If you feel you have been falsely or unfairly accused of violating this
      Code of Conduct, you should notify one of the event organizers with a
      concise description of your grievance.
    </Paragraph>
    <Paragraph>
      Your grievance will be handled in accordance with our existing governing
      policies.
    </Paragraph>

    <CocHeading as="h2">Credits</CocHeading>
    <Paragraph>
      This Code of Conduct was inspired by the{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://berlincodeofconduct.org/"
      >
        Berlin
      </a>{" "}
      and{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://2018.jsconf.eu/code-of-conduct/"
      >
        JS Conf
      </a>{" "}
      code of conducts.
    </Paragraph>
  </Container>
);
