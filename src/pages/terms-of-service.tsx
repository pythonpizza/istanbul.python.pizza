import Head from "next/head";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { genericInformation } from "~/data/generic";

const CONTACT_EMAIL = "warsawpythonpizza@gmail.com";
const ORGANIZERS = "Piotr Grędowski, Dorota Ostrowska, and Natalia Traczewska";
const TICKET_SELLER = "EuroPython Society";

const sections = [
  {
    title: "Organizer",
    content: (
      <Paragraph>
        Warsaw Python Pizza is organized by {ORGANIZERS}. For questions about
        these terms, contact us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </Paragraph>
    ),
  },
  {
    title: "Tickets",
    content: (
      <>
        <Paragraph>
          Tickets are sold by {TICKET_SELLER} through Pretix. By buying or using
          a ticket, you agree to these terms, the ticket conditions shown during
          checkout, and Pretix terms that apply to the purchase flow.
        </Paragraph>
        <Paragraph>
          A valid ticket may be required for admission. We may ask attendees to
          show a ticket confirmation, ID, or other reasonable proof needed to
          verify a ticket.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Refunds and transfers",
    content: (
      <>
        <Paragraph>
          Unless stated otherwise during checkout, tickets are refundable only
          at the organizer’s discretion. Ticket transfers may be possible
          through Pretix if enabled for the Event.
        </Paragraph>
        <Paragraph>
          If the Event is cancelled, we will provide information about refunds
          or other remedies through the email address used for the ticket order.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Event changes",
    content: (
      <Paragraph>
        We may change the programme, speakers, schedule, venue details, or other
        Event arrangements when needed. We will make reasonable efforts to
        communicate significant changes.
      </Paragraph>
    ),
  },
  {
    title: "Code of Conduct",
    content: (
      <Paragraph>
        All attendees, speakers, sponsors, volunteers, and organizers must
        follow the Warsaw Python Pizza Code of Conduct. We may refuse admission
        or remove anyone who violates it, without refund where appropriate.
      </Paragraph>
    ),
  },
  {
    title: "Photography and recordings",
    content: (
      <Paragraph>
        The Event may be photographed, streamed, or recorded. By attending, you
        acknowledge that you may appear in photos or recordings used for Event
        documentation, promotion, or publication. If you have concerns, contact
        the organizers.
      </Paragraph>
    ),
  },
  {
    title: "Contests and prizes",
    content: (
      <>
        <Paragraph>
          We may run contests, quizzes, raffles, or similar activities during
          the Event. Unless separate rules are published for a specific
          activity, participation is voluntary and limited to Event attendees.
        </Paragraph>
        <Paragraph>
          Winners may be asked to provide information needed to confirm
          eligibility, deliver a prize, document the award, or meet tax and
          accounting obligations under Polish law.
        </Paragraph>
        <Paragraph>
          Prizes may be subject to Polish tax rules, including withholding or
          reporting obligations where required by law. If a prize cannot legally
          or practically be awarded, we may substitute it with a comparable
          prize or decline to award it.
        </Paragraph>
        <Paragraph>
          Any activity involving chance will only be run if it is permitted
          under applicable Polish regulations, or it will be structured as a
          skill-based contest instead.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Liability",
    content: (
      <Paragraph>
        To the fullest extent permitted by law, the organizer is not liable for
        indirect losses, personal expenses, travel costs, or other damages
        arising from Event changes, cancellation, or attendance, except where
        liability cannot legally be limited.
      </Paragraph>
    ),
  },
  {
    title: "Privacy",
    content: (
      <Paragraph>
        We process personal information as described in the Warsaw Python Pizza
        Privacy Policy.
      </Paragraph>
    ),
  },
];

const SectionHeading = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => (
  <Heading
    as="h2"
    sx={{
      alignItems: "baseline",
      color: "text",
      display: "flex",
      fontSize: "body",
      gap: "secondary",
      mb: "secondary",
      mt: 0,
    }}
  >
    <Box as="span" sx={{ color: "primary", fontFamily: "heading" }}>
      {String(index).padStart(2, "0")}
    </Box>
    {children}
  </Heading>
);

const TermsOfService = () => (
  <Container variant="smallContainer" sx={{ textAlign: "left" }}>
    <Head>
      <title>{`Terms of Service | ${genericInformation.pageTitle}`}</title>
      <meta
        name="description"
        content="Terms of Service for Warsaw Python Pizza tickets and attendance."
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <Heading as="h1" variant="heading" sx={{ textAlign: "center" }}>
      Terms of Service
    </Heading>

    <Box
      sx={{
        backgroundColor: "primary",
        borderRadius: "primary",
        color: "white",
        mb: "primary",
        p: "secondary",
        textAlign: "center",
      }}
    >
      <Paragraph sx={{ m: 0 }}>Last updated: 27 April 2026</Paragraph>
      <Paragraph sx={{ m: 0 }}>
        These terms apply to tickets and attendance for Warsaw Python Pizza.
      </Paragraph>
    </Box>

    {sections.map((section, index) => (
      <Box
        as="section"
        key={section.title}
        sx={{
          borderTop: "1px solid",
          borderColor: "primary",
          py: "secondary",
        }}
      >
        <SectionHeading index={index + 1}>{section.title}</SectionHeading>
        {section.content}
      </Box>
    ))}
  </Container>
);

export default TermsOfService;
