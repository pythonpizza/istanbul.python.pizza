import NextLink from "next/link";
import { Container, Link, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container id="schedule" variant="smallContainer">
    <AnchorHeading anchor="schedule">Program</AnchorHeading>

    <Link
      as={NextLink}
      href="/compact-agenda/"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "1rem",
        mb: "1rem",
        px: "1.6rem",
        py: ".8rem",
        borderRadius: "999px",
        backgroundColor: "primary",
        color: "white",
        fontFamily: "heading",
        fontSize: "smallBody",
        "&:hover, &:focus": {
          color: "white",
        },
      }}
    >
      Compact agenda 🔗
    </Link>

    <Paragraph>
      Join us for a full day of Python talks, coffee breaks, lightning talks,
      and pizza.
    </Paragraph>

    {SCHEDULE.map((schedule, index) => (
      <ScheduleCard
        variant={schedule.label ? "info" : "talk"}
        key={`${schedule.when}-${schedule.title ?? schedule.label}`}
        schedule={schedule}
        invert={!(index % 2)}
      />
    ))}
  </Container>
);
