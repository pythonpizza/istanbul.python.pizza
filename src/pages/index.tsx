import Head from "next/head";
import { Box } from "theme-ui";

import { Footer } from "~/components/footer";
import { FloatingTicketsButton, Header } from "~/components/header";
import { genericInformation } from "~/data/generic";
import { About } from "~/sections/about";
import { CFP_Closed } from "~/sections/cfp_closed";
import { Coc } from "~/sections/coc";
import { Hero } from "~/sections/hero";
import { OrganizerSection } from "~/sections/organizers";
import { Schedule } from "~/sections/schedule";
import { Sponsors } from "~/sections/sponsors";
import { Venue } from "~/sections/venue";

const Home = () => (
  <Box>
    <Head>
      <title>{genericInformation.pageTitle}</title>
      <meta property="og:title" content={genericInformation.pageTitle} />
      <meta
        property="og:description"
        content={genericInformation.socialDescription}
      />
      <meta name="twitter:site" content="@pythonpizzaconf" />
      <meta
        property="og:image"
        content="https://warsaw.python.pizza/social-image.jpg"
      />
      <meta name="twitter:image:alt" content="Conference logo" />
      <meta name="twitter:title" content="Warsaw Python Pizza Conference!!" />
      <meta
        name="twitter:image"
        content="https://warsaw.python.pizza/social-image.jpg"
      />
      <meta
        name="twitter:description"
        content="Join the fun 🥳🎉🍕 on May 9, 2026"
      />
      <meta name="photo-attribution" content="Photo by --todo (--url todo)" />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from static event metadata.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConferenceEvent",
            name: "Warsaw Python Pizza",
            url: "https://warsaw.python.pizza",
            startDate: "2026-05-09",
            endDate: "2026-05-09",
            location: {
              "@type": "Place",
              name: "PJAIT building A, Koszykowa 86",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Warsaw",
                addressCountry: "PL",
              },
            },
            hasParticipationOffer: {
              "@type": "Offer",
              name: "Call for Proposals",
              url: "https://forms.gle/5pqj68ES9ENaGPBf6",
              availabilityEnds: "2026-04-12",
            },
            offers: {
              "@type": "Offer",
              name: "Tickets",
              url: genericInformation.ticketsUrl,
              availability: "https://schema.org/InStock",
              validFrom: "2026-04-27",
            },
            hasSponsorshipOffer: {
              "@type": "Offer",
              name: "Sponsor Packages",
              url: "https://warsaw.python.pizza/#sponsors",
            },
          }),
        }}
      />
    </Head>
    <Header />
    <FloatingTicketsButton />
    <Hero />
    <About />
    {/*<SpeakersSection />*/}
    <Sponsors />
    <Schedule />
    <OrganizerSection />
    <CFP_Closed />
    <Venue />
    <Coc />
    <Footer />
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Box>
);

export default Home;
