// Single source of truth for this edition's facts.
// Update this file (and the other ones in this directory)
// to stand up a new edition.

const cfpUrl = "https://forms.gle/41Zpwh2N2uS4P1RB8";

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
  ticketsUrl: "#",
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
    deadlineDisplay: "Tuesday, 25 August 2026, 23:59 AoE",
  },
  // whatever is most important right now
  cta: { label: "Submit a talk! 🎤", href: cfpUrl },
};
