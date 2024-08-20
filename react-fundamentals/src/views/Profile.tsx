import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IProfile } from "../interfaces/basicos-interface/profiles";

export default function Profiles() {
  const profile = useSelector<{ profile: IProfile }>(
    (state) => state.profile.profile
  );
  const params = useParams<{ profile: string }>();

  return (
    <div className="profiles">
      {profile.username}
      <h2>Profile {params.profile}</h2>
      <button>
        <Link to={`/profiles`}>Go back to profiles</Link>
      </button>
    </div>
  );
}
