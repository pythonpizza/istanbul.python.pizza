/** @jsxImportSource theme-ui */
import React from "react";
import { Image, Link } from "theme-ui";

import type { Organizer as OrganizerType } from "~/data/organizers";

type OrganizerProps = Pick<OrganizerType, "name" | "image" | "links">;

const Organizer = ({ name, image, links = [] }: OrganizerProps) => {
  return (
    <div>
      <img
        src={image}
        alt={name}
        style={{
          width: "90%",
          height: "auto",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3
          style={{ margin: 0 }}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            flexWrap: "wrap",
          }}
        >
          <span>{name}</span>
          {links.map((link) => (
            <Link
              as="a"
              key={`${name}-${link.url}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              <Image
                src={link.icon}
                alt={link.label}
                sx={{
                  width: "16px",
                  height: "16px",
                  display: "block",
                  filter: "brightness(0)",
                }}
              />
            </Link>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Organizer;
