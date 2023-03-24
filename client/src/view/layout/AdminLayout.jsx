import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

export default function AdminLayout() {
  return (
    <Fragment>
      <main className="container">
        <Outlet />
      </main>
    </Fragment>
  );
}
