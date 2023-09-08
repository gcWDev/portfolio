import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../templates/Nav/Nav";
import Footer from "../templates/Footer/Footer";

export default function HomeLayout() {
  return (
    <main>
      <div className="content-container">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}
