import { type CollectionEntry, getCollection } from "astro:content";
import { event } from "@data/event";

export type Session = CollectionEntry<"schedule">["data"];
export type SpeakerRecord = CollectionEntry<"speakers">["data"] & {
  id: string;
};

export async function getScheduleData() {
  const [scheduleEntries, speakerEntries] = await Promise.all([
    getCollection("schedule"),
    getCollection("speakers"),
  ]);

  const speakerMap: Record<string, SpeakerRecord> = Object.fromEntries(
    speakerEntries.map((e) => [e.id, { id: e.id, ...e.data }]),
  );

  const sessions = scheduleEntries
    .map((e) => e.data)
    .sort((a, b) => {
      if (!a.when) return -1;
      if (!b.when) return 1;
      return new Date(a.when).getTime() - new Date(b.when).getTime();
    });

  return { sessions, speakerMap };
}

const sessionTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: event.timeZone,
});

export const formatSessionTime = (t: string) =>
  sessionTimeFormat.format(new Date(t));
