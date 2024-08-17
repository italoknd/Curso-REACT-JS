import React from "react";
import { Link } from "react-router-dom";
import "./profiles.css";

export default function Profiles() {
  const profiles: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="profiles">
      {profiles.map((profile: number) => {
        return (
          <div key={profile}>
            <h2>
              <Link to={`/${profile}`}>Profile {profile}</Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
