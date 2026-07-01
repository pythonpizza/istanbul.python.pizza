import { getCollection, type CollectionEntry } from "astro:content";
import { format } from "date-fns";

export type ScheduleEvent = CollectionEntry<"schedule">["data"];
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

  const events = scheduleEntries
    .map((e) => e.data)
    .sort((a, b) => {
      if (!a.when) return -1;
      if (!b.when) return 1;
      return new Date(a.when).getTime() - new Date(b.when).getTime();
    });

  return { events, speakerMap };
}

export const formatEventTime = (t: string) => format(new Date(t), "HH:mm");
