import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./profiles.css";
import { profiles } from "../data/profiles";
import { IProfile } from "../interfaces/basicos-interface/profiles";
import { useDispatch } from "react-redux";
import { sendProfileData } from "../store/profile";

export default function Profiles() {
  const dispatch = useDispatch();

  return (
    <div className="main-container">
      <aside className="menu">
        {profiles.map((profile: IProfile) => {
          return (
            <nav key={profile.profileId}>
              <ul>
                <li onClick={(e) => dispatch(sendProfileData(profile))}>
                  <NavLink
                    className={(isActive) => (isActive ? "selected-link" : "")}
                    to={`/profiles/${profile.profileId}`}
                  >
                    Profile {profile.profileId}
                  </NavLink>
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
