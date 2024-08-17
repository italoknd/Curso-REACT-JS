import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Whoops... seems like we have nothing here. </h3>
      <Link to="/">Home</Link>
    </div>
  );
}
