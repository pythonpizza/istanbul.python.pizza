import type { SpeakerId } from "./speakers";

export type Event = {
  label?: string;
  title?: string;
  speakerIds?: SpeakerId[];
  when?: string;
  until?: string;
  isKeynote?: boolean;
};

export const SCHEDULE: Event[] = [
  {
    label: "Registration",
    when: "2026-05-09T09:30:00+02:00",
    until: "2026-05-09T10:00:00+02:00",
  },
  {
    label: "Opening",
    when: "2026-05-09T10:00:00+02:00",
    until: "2026-05-09T10:10:00+02:00",
  },
  {
    title:
      "The Python Dilemma on Microsoft Fabric: Data Wrangler, Pandas, or PySpark?",
    speakerIds: ["estera-kot"],
    when: "2026-05-09T10:10:00+02:00",
    until: "2026-05-09T10:34:00+02:00",
    isKeynote: true,
  },
  {
    title: "Catch Me If You __can__",
    speakerIds: ["agata-skamruk"],
    when: "2026-05-09T10:34:00+02:00",
    until: "2026-05-09T10:46:00+02:00",
  },
  {
    title:
      "It Doesn’t Have to Be Perfect: How I Shipped a Sales Forecasting Pipeline at 16",
    speakerIds: ["yevhen-maltsev"],
    when: "2026-05-09T10:46:00+02:00",
    until: "2026-05-09T10:58:00+02:00",
  },
  {
    title: "Building robust MCP servers with Python and FastMCP",
    speakerIds: ["vladyslav-fedoriuk"],
    when: "2026-05-09T10:58:00+02:00",
    until: "2026-05-09T11:10:00+02:00",
  },
  {
    label: "Coffee Break #1",
    when: "2026-05-09T11:10:00+02:00",
    until: "2026-05-09T11:34:00+02:00",
  },
  {
    title: "AI In Drug Design",
    speakerIds: ["jonas-cicenas"],
    when: "2026-05-09T11:34:00+02:00",
    until: "2026-05-09T11:46:00+02:00",
  },
  {
    title: "SuperDoc SDK: a modern alternative to python-docx",
    speakerIds: ["andrii-orlov"],
    when: "2026-05-09T11:46:00+02:00",
    until: "2026-05-09T11:58:00+02:00",
  },
  {
    title:
      "Beat the Pareto Principle: Let AI Handle the How, So You Can Focus on the Why",
    speakerIds: ["krzysiek-wilczynski"],
    when: "2026-05-09T11:58:00+02:00",
    until: "2026-05-09T12:10:00+02:00",
  },
  {
    title: "I vibecoded my wedding",
    speakerIds: ["dorota-ostrowska"],
    when: "2026-05-09T12:10:00+02:00",
    until: "2026-05-09T12:22:00+02:00",
  },
  {
    label: "Coffee Break #2",
    when: "2026-05-09T12:22:00+02:00",
    until: "2026-05-09T12:46:00+02:00",
  },
  {
    title: "Let your coding agent speak with `speakup` tool",
    speakerIds: ["piotr-gredowski"],
    when: "2026-05-09T12:46:00+02:00",
    until: "2026-05-09T12:58:00+02:00",
  },
  {
    label: "Pizza!",
    when: "2026-05-09T12:58:00+02:00",
    until: "2026-05-09T13:58:00+02:00",
  },
  {
    title: "Burn Your requirements.txt: The 10-Minute UV & Ruff Speedrun",
    speakerIds: ["cyprian-gburek"],
    when: "2026-05-09T13:58:00+02:00",
    until: "2026-05-09T14:10:00+02:00",
  },
  {
    title:
      "I am Python Engineer. How do I contribute to the Open Mercato - an open source Next.js ERP?",
    speakerIds: ["mateusz-staniaszek"],
    when: "2026-05-09T14:10:00+02:00",
    until: "2026-05-09T14:22:00+02:00",
  },
  {
    title: "Don't be scared when PostgreSQL Stops Using Your Indexes",
    speakerIds: ["szymon-cader"],
    when: "2026-05-09T14:22:00+02:00",
    until: "2026-05-09T14:34:00+02:00",
  },
  {
    title: "Self Improving Expert Systems for medical sourcing",
    speakerIds: ["timothy-hobbs"],
    when: "2026-05-09T14:34:00+02:00",
    until: "2026-05-09T14:46:00+02:00",
  },
  {
    title: "Why Your CV Isn't Working - 5 Common Mistakes IT Candidates Make",
    speakerIds: ["marta-mulik-walczyna"],
    when: "2026-05-09T14:46:00+02:00",
    until: "2026-05-09T14:58:00+02:00",
  },
  {
    title: "Stealth Scraping 2026: Camoufox czy Nodriver?",
    speakerIds: ["jakub-melzacki", "daniel-goliszewski"],
    when: "2026-05-09T14:58:00+02:00",
    until: "2026-05-09T15:10:00+02:00",
  },
  {
    title: "Unsupervised Football Team Classification Using Clustering Techniques",
    speakerIds: ["aksa-fatima"],
    when: "2026-05-09T15:10:00+02:00",
    until: "2026-05-09T15:22:00+02:00",
  },
  {
    label: "Coffee Break #3",
    when: "2026-05-09T15:22:00+02:00",
    until: "2026-05-09T15:46:00+02:00",
  },
  {
    title: "DevOps: You Own More Than You Think",
    speakerIds: ["janusz-kamienski"],
    when: "2026-05-09T15:46:00+02:00",
    until: "2026-05-09T15:58:00+02:00",
  },
  {
    title: "Knowledge representation for efficient learning and communication",
    speakerIds: ["jan-bielecki"],
    when: "2026-05-09T15:58:00+02:00",
    until: "2026-05-09T16:10:00+02:00",
  },
  {
    title: "AI that doesn't lie",
    speakerIds: ["aleksandra-olszewska"],
    when: "2026-05-09T16:10:00+02:00",
    until: "2026-05-09T16:22:00+02:00",
  },
  {
    title:
      "Three Startups, One Pattern: What It Takes to Build with Python and AI",
    speakerIds: ["vadym-lishchynskyi"],
    when: "2026-05-09T16:22:00+02:00",
    until: "2026-05-09T16:34:00+02:00",
  },
  {
    label: "Coffee Break #4",
    when: "2026-05-09T16:34:00+02:00",
    until: "2026-05-09T16:58:00+02:00",
  },
  {
    title: "Wawa-Uiua! Very Nice Array Programming!",
    speakerIds: ["mateusz-zaremba"],
    when: "2026-05-09T16:58:00+02:00",
    until: "2026-05-09T17:10:00+02:00",
  },
  {
    title:
      "When the DATE type shouldn't be used for dates - a love letter to some programming languages",
    speakerIds: ["bartek-nowak"],
    when: "2026-05-09T17:10:00+02:00",
    until: "2026-05-09T17:22:00+02:00",
  },
  {
    title: "LLM made me install it",
    speakerIds: ["kinga-marszalkowska"],
    when: "2026-05-09T17:22:00+02:00",
    until: "2026-05-09T17:34:00+02:00",
  },
  {
    title: "Test more by checking less 👀",
    speakerIds: ["sebastian-buczynski"],
    when: "2026-05-09T17:34:00+02:00",
    until: "2026-05-09T17:46:00+02:00",
  },
  {
    label: "Lightning talks",
    when: "2026-05-09T17:46:00+02:00",
    until: "2026-05-09T18:10:00+02:00",
  },
  {
    label: "Closing Session",
    when: "2026-05-09T18:10:00+02:00",
    until: "2026-05-09T18:22:00+02:00",
  },
];
