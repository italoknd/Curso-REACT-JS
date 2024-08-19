import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./profiles.css";
import { profiles } from "../data/profiles";
import { IProfile } from "../interfaces/basicos-interface/profiles";

export default function Profiles() {
  return (
    <div className="main-container">
      <aside className="menu">
        {profiles.map((profile: IProfile) => {
          return (
            <nav key={profile.profileId}>
              <ul>
                <li>
                  <Link to={`/profiles/${profile.profileId}`}>
                    Profile {profile.profileId}
                  </Link>
                </li>
              </ul>
            </nav>
          );
        })}
      </aside>
      <div className="children">
        <Outlet />
      </div>
    </div>
  );
}
