import React from "react";

interface ISection {
  title: string;
}

export default function SectionTitle(props: ISection) {
  return (
    <div>
      <h2 style={{ color: "white" }}>{props.title}</h2>
    </div>
  );
}
