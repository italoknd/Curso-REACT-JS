import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IProfile } from "../interfaces/basicos-interface/profiles";
import "./profile.css";

export default function Profiles() {
  const { profile } = useSelector<{ profile: IProfile }>(
    ({ profile }) => profile
  ) as {
    profile: IProfile;
  };
  // const params = useParams<{ profile: string }>();

  return (
    // <h2>Profile {params.profile}</h2>
    <div className="main-profile-container">
      <div className="info">
        <h2>Name: {profile.username}</h2>
        <h2>Age: {profile.age}</h2>
      </div>
      <div className="desc">{profile.description}</div>
      <button className="button">
        <Link to={`/profiles`}>Go back to profiles</Link>
      </button>
    </div>
  );
}
