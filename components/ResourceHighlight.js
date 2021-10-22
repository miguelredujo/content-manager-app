import { Fragment } from "react";
import Link from "next/link";
import moment from "moment";

const ResourceHighlights = ({ resources }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px",
        padding: "16px",
      }}
    >
      {resources.map((m, i) => {
        return (
          <section
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#eee",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ margin: "0", padding: "8px" }}>
                {moment(m.createAt).format("LLL")}
              </h3>
              <span
                style={{
                  background: "#aaa",
                  borderRadius: "8px",
                  padding: "2px 8px",
                }}
              >
                {m.status}
              </span>
            </div>
            <h1 style={{ margin: "0", padding: "8px" }}>{m.title}</h1>
            <p style={{ margin: "0", padding: "8px" }}>{m.description}</p>
            <Link href={`/resources/${m.id}`}>
              <button style={{ margin: "8px" }}>details</button>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default ResourceHighlights;
