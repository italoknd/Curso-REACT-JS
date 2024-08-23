import React from "react";

interface ISection {
  title: string;
}

export default function SectionTitle(props: ISection) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}
