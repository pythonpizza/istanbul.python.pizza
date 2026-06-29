/** @jsxRuntime classic */
/** @jsxImportSource theme-ui */
import { format } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Flex, Text, jsx } from "theme-ui";

import type { Event } from "~/data/schedule";
import { SPEAKERS } from "~/data/speakers";

type AgendaHighlight = {
  currentIndex: number | null;
  nextIndex: number | null;
};

type ReferenceTime = {
  isFixed: boolean;
  time: Date | null;
};

export type ColorMode = "light" | "dark";

const getStartTime = (event: Event) =>
  event.when ? new Date(event.when).getTime() : Number.POSITIVE_INFINITY;

const getEndTime = (event: Event) =>
  event.until ? new Date(event.until).getTime() : getStartTime(event);

export const getAgendaHighlight = (
  schedule: Event[],
  referenceTime: Date,
): AgendaHighlight => {
  const referenceTimestamp = referenceTime.getTime();
  const currentIndex = schedule.findIndex((event) => {
    const startTime = getStartTime(event);
    const endTime = getEndTime(event);

    return startTime <= referenceTimestamp && referenceTimestamp < endTime;
  });
  const nextIndex = schedule.findIndex(
    (event) => getStartTime(event) > referenceTimestamp,
  );

  return {
    currentIndex: currentIndex === -1 ? null : currentIndex,
    nextIndex: nextIndex === -1 ? null : nextIndex,
  };
};

const getReferenceTime = () => {
  if (typeof window === "undefined") {
    return { isFixed: false, time: null };
  }

  const highlightTime = new URLSearchParams(window.location.search).get(
    "highlightTime",
  );

  if (highlightTime) {
    const normalizedHighlightTime = highlightTime.match(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
    )
      ? highlightTime.replace(" ", "T")
      : highlightTime.replace(/ (\d{2}:\d{2})$/, "+$1");
    const parsedTime = new Date(normalizedHighlightTime);

    if (!Number.isNaN(parsedTime.getTime())) {
      return { isFixed: true, time: parsedTime };
    }
  }

  return { isFixed: false, time: new Date() };
};

const formatTime = (time: string) => format(new Date(time), "HH:mm");

const getTitle = (event: Event) => event.title ?? event.label ?? "";

const getSpeakers = (event: Event) =>
  event.speakerIds
    ?.map((speakerId) => SPEAKERS[speakerId]?.name)
    .filter(Boolean)
    .join(", ");

export const CompactAgenda: React.FC<{
  schedule: Event[];
  colorMode?: ColorMode;
}> = ({ schedule, colorMode = "light" }) => {
  const agendaItemRefs = useRef<(HTMLElement | null)[]>([]);
  const hasScrolledToHighlight = useRef(false);
  const [reference, setReference] = useState<ReferenceTime>({
    isFixed: false,
    time: null,
  });

  useEffect(() => {
    const initialReference = getReferenceTime();

    setReference(initialReference);

    if (initialReference.isFixed) {
      return;
    }

    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setReference(getReferenceTime());
        interval = window.setInterval(() => {
          setReference(getReferenceTime());
        }, 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );

    return () => {
      window.clearTimeout(timeout);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, []);

  const highlight = useMemo(
    () =>
      reference.time
        ? getAgendaHighlight(schedule, reference.time)
        : { currentIndex: null, nextIndex: null },
    [schedule, reference.time],
  );

  useEffect(() => {
    if (hasScrolledToHighlight.current || !reference.time) {
      return;
    }

    const highlightedIndex = highlight.currentIndex ?? highlight.nextIndex;

    if (highlightedIndex === null) {
      return;
    }

    hasScrolledToHighlight.current = true;
    window.requestAnimationFrame(() => {
      agendaItemRefs.current[highlightedIndex]?.scrollIntoView({
        block: "center",
      });
    });
  }, [highlight.currentIndex, highlight.nextIndex, reference.time]);

  return (
    <Box
      as="ol"
      sx={{
        listStyle: "none",
        display: "grid",
        gap: [".6rem", ".4rem"],
        m: 0,
        p: 0,
      }}
    >
      {schedule.map((event, index) => {
        const isCurrent = highlight.currentIndex === index;
        const isNext = highlight.nextIndex === index;
        const speakers = getSpeakers(event);
        const isDark = colorMode === "dark";

        return (
          <Box
            as="li"
            key={`${event.when}-${getTitle(event)}`}
            ref={(element) => {
              agendaItemRefs.current[index] = element;
            }}
            sx={{
              display: "grid",
              gridTemplateColumns: [
                "minmax(3.6rem, auto) minmax(0, 1fr) auto",
                "4.2rem minmax(0, 1fr) auto",
              ],
              gridTemplateRows: "auto auto",
              alignItems: "start",
              columnGap: [".5rem", ".6rem"],
              rowGap: [".45rem", ".15rem"],
              minHeight: 0,
              px: [".85rem", ".75rem"],
              py: [".75rem", ".5rem"],
              border: "1px solid",
              borderColor:
                isCurrent || isNext ? "primary" : isDark ? "#3a2725" : "#eee",
              borderRadius: ".8rem",
              backgroundColor: isCurrent
                ? "primary"
                : isNext
                  ? isDark
                    ? "#2c1d1b"
                    : "#fff4f2"
                  : isDark
                    ? "#201817"
                    : "white",
              boxShadow: isCurrent
                ? `0 .8rem 2.4rem -1.6rem rgba(237, 67, 55, ${
                    isDark ? ".9" : ".75"
                  })`
                : undefined,
              color: isCurrent ? "white" : isDark ? "#f8ebe8" : "text",
            }}
          >
            <Text
              sx={{
                fontFamily: "heading",
                fontSize: ["1.25rem", "1.2rem"],
                fontWeight: "heading",
                lineHeight: 1.1,
                color: isCurrent ? "white" : "primary",
                whiteSpace: "nowrap",
                gridColumn: 1,
                gridRow: 1,
              }}
            >
              {event.when ? formatTime(event.when) : ""}
            </Text>

            <Box
              sx={{
                minWidth: 0,
                gridColumn: ["1 / -1", "2 / span 2"],
                gridRow: [2, "1 / span 2"],
                textAlign: "left",
              }}
            >
              {speakers && (
                <Text
                  sx={{
                    display: "block",
                    pr: [0, isCurrent || isNext ? "4.1rem" : 0],
                    fontSize: ["1.1rem", "1.1rem"],
                    lineHeight: 1.2,
                    opacity: isCurrent ? 0.92 : 0.72,
                    overflowWrap: "anywhere",
                  }}
                >
                  {speakers}
                </Text>
              )}

              <Text
                sx={{
                  display: "block",
                  mt: speakers ? ".2rem" : 0,
                  fontFamily: "heading",
                  fontSize: ["1.35rem", "1.3rem"],
                  fontWeight: "heading",
                  lineHeight: [1.22, 1.15],
                  overflowWrap: "anywhere",
                }}
              >
                {getTitle(event)}
              </Text>
            </Box>

            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: ["3rem", "3.5rem"],
                gridColumn: 3,
                gridRow: 1,
              }}
            >
              {(isCurrent || isNext) && (
                <Text
                  sx={{
                    px: ".45rem",
                    py: ".2rem",
                    borderRadius: "999px",
                    backgroundColor: isCurrent ? "white" : "primary",
                    color: isCurrent ? "primary" : "white",
                    fontFamily: "heading",
                    fontSize: [".85rem", ".9rem"],
                    fontWeight: "heading",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {isCurrent ? "Now" : "Next"}
                </Text>
              )}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};
