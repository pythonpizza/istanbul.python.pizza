import Head from "next/head";
import { Box, Container, Heading, Paragraph } from "theme-ui";

import { genericInformation } from "~/data/generic";

const CONTACT_EMAIL = "warsawpythonpizza@gmail.com";
const DATA_CONTROLLER =
  "Piotr Grędowski, Dorota Ostrowska, and Natalia Traczewska, organizers of Warsaw Python Pizza";
const TICKET_SELLER = "EuroPython Society";

const thirdPartyServices = [
  {
    name: "Gmail",
    description:
      "The Warsaw Python Pizza Team may rely on Gmail for direct and group emails to communicate internally and externally. If you email us, your information may be collected for the purpose of communicating with you about the Event.",
  },
  {
    name: "Google Forms",
    description:
      "We may use Google Forms for announcements, call for proposals, feedback, and similar forms.",
  },
  {
    name: "Google Drive, Docs, and Sheets",
    description:
      "We may use Google Drive to store documents, spreadsheets, and similar files needed to run the Event. Some of these files may include personal data.",
  },
  {
    name: "YouTube",
    description:
      "We may stream or publish talk recordings on YouTube after the Event.",
  },
  {
    name: "Pretix",
    description:
      "We use Pretix for ticketing services. If you buy a ticket, Pretix uses cookies to keep track of your cart and improve the ordering process. Data submitted to Pretix is stored on servers in Germany.",
    link: "https://pretix.eu/about/en/privacy",
  },
];

const sections = [
  {
    title: "Handling of personal information",
    content: (
      <>
        <Paragraph>
          You authorize {DATA_CONTROLLER} (“Data Controller”) to handle personal
          information in connection with Warsaw Python Pizza (“Event”) for the
          purposes and for the period of time specified below.
        </Paragraph>
        <Paragraph>
          Tickets are sold by {TICKET_SELLER} through Pretix. Information
          submitted during ticket purchase may therefore be processed by{" "}
          {TICKET_SELLER} and Pretix as needed to complete ticket sales and
          operate admission.
        </Paragraph>
        <Paragraph>
          We process personal information only as needed to organize the Event,
          communicate with participants, manage proposals and feedback, sell and
          verify tickets, publish the Event programme, and keep participants
          safe.
        </Paragraph>
        <Paragraph>
          You can revoke your agreement at any time by sending an email to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </Paragraph>
      </>
    ),
  },
  {
    title: "Third-party services",
    content: (
      <>
        <Paragraph>
          A few third-party services help us run the website, ticketing, and the
          conference. We may share some information with them as part of their
          service. We select services that we believe comply with EU data
          privacy regulations, but this list might not be exhaustive.
        </Paragraph>
        <Box sx={{ display: "grid", gap: "secondary", mt: "secondary" }}>
          {thirdPartyServices.map((service) => (
            <Box
              key={service.name}
              sx={{
                borderLeft: "0.4rem solid",
                borderColor: "primary",
                pl: "secondary",
              }}
            >
              <Paragraph sx={{ mb: 1 }}>
                <strong>{service.name}</strong>
              </Paragraph>
              <Paragraph sx={{ m: 0 }}>
                {service.description}{" "}
                {service.link && (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                )}
              </Paragraph>
            </Box>
          ))}
        </Box>
      </>
    ),
  },
  {
    title: "Processors",
    content: (
      <>
        <Paragraph>
          The Data Controller handles personal information. The information may
          also be processed by:
        </Paragraph>
        <ul>
          <li>
            Google Ireland Ltd, Gordon House, Barrow Street, Dublin 4, Ireland
          </li>
          <li>YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA</li>
          <li>
            pretix GmbH, Berthold-Mogel-Straße 1, 69126 Heidelberg, Germany
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Your rights",
    content: (
      <>
        <Paragraph>
          Under applicable data protection laws, you have the right to:
        </Paragraph>
        <ul>
          <li>Revoke your agreement at any time.</li>
          <li>
            Request information about which personal information we process and
            why.
          </li>
          <li>Request access to your personal information.</li>
          <li>Ask us to correct or update your personal information.</li>
          <li>Ask us to delete your personal information.</li>
          <li>
            Contact us or the Polish data protection authority if you have
            concerns about our handling of your data.
          </li>
        </ul>
      </>
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

const PrivacyPolicy = () => (
  <Container variant="smallContainer" sx={{ textAlign: "left" }}>
    <Head>
      <title>{`Privacy Policy | ${genericInformation.pageTitle}`}</title>
      <meta
        name="description"
        content="Privacy Policy for Warsaw Python Pizza."
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>

    <Heading as="h1" variant="heading" sx={{ textAlign: "center" }}>
      Privacy Policy
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
        This policy explains how we handle personal information for Warsaw
        Python Pizza.
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

export default PrivacyPolicy;
