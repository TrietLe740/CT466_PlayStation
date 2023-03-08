import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./layout.css";

export default function MainLayout() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
