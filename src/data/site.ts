const ticketsUrl = "https://pretix.eu/europython/warsaw-python-pizza/";

// ponytail: singleton config — no collection needed
export const site = {
  pageTitle: "Warsaw Python Pizza",
  socialDescription: "Warsaw Python Pizza, join us in Warsaw on May 9, 2026",
  siteHeading: "Warsaw Python Pizza",
  subHeading: "PJAIT building A, Koszykowa 86, Warsaw, Poland",
  whenDatetime: "2026/05/09 10:00 AM UTC+2",
  whenFormat: "do MMMM y",
  ticketsUrl,
  // Whatever's most important right now (tickets, CFP, sold out) — change this one line.
  cta: { label: "Buy tickets 🎫", href: ticketsUrl },
  contactEmail: "warsawpythonpizza@gmail.com",
  socialImageUrl: "https://warsaw.python.pizza/social-image.jpg",
};
