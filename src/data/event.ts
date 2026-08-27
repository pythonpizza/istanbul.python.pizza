// Single source of truth for this edition's facts.
// Update this file (and the other ones in this directory)
// to stand up a new edition.

const cfpUrl = "https://forms.gle/41Zpwh2N2uS4P1RB8";
const ticketsUrl =
  "https://kommunity.com/pythonturkiye/events/python-pizza-istanbul-4fa122d9";

export const event = {
  name: "Python Pizza Istanbul",
  city: "Istanbul",
  description:
    "Python Pizza Istanbul - a one-day Python micro-conference on Saturday, 14 November 2026",
  subHeading: "StartGate, Maslak, Istanbul",
  whenDisplay: "Saturday, 14 November 2026",
  startDate: "2026-11-14T11:00:00+03:00",
  endDate: "2026-11-14T18:00:00+03:00",
  contactEmail: "organizers@pythonturkiye.org",
  ticketsUrl: ticketsUrl,
  maxAttendees: 150,
  organizer: {
    name: "Python Türkiye",
  },
  venue: {
    name: "StartGate Istanbul",
    addressLine: "Maslak Mah. Eski Büyükdere Cad. No:21",
    district: "Sarıyer / İstanbul",
    url: "https://www.startgate.com/",
    mapsUrl:
      "https://maps.google.com/?q=StartGate+Maslak+Eski+Büyükdere+Caddesi+21",
  },
  cfp: {
    url: cfpUrl,
    deadlineDisplay: "Monday, 7 September 2026, 23:59 AoE",
  },
  // shown together in the hero; ctas with floating: true also get a floating button once scrolled past
  ctas: [
    {
      id: "cfp",
      label: "Submit a talk! 🎤",
      href: cfpUrl,
      variant: "outline" as const,
      floating: true,
    },
    {
      id: "tickets",
      label: "Get your ticket! 🎟️",
      href: ticketsUrl,
      variant: "inverted" as const,
      floating: false,
    },
  ],
};
