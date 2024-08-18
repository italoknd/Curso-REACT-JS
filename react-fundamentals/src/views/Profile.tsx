import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Profiles() {
  const params = useParams<{ profile: string }>();

  return (
    <div className="profiles">
      <h2>Profile {params.profile}</h2>
      <button>
        <Link to={`/profiles`}>Go back to profiles</Link>
      </button>
    </div>
  );
}
