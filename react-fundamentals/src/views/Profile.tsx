import React from "react";
import { Link } from "react-router-dom";

export default function Profiles() {
  return (
    <div className="profiles">
      <h2>Main profile page</h2>
      <button>
        <Link to={`/profiles`}>Go back to profiles</Link>
      </button>
    </div>
  );
}
