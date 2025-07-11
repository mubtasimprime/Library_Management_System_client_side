import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <section className="font">
        <div className="shadow-md bg-white sticky top-0 z-50">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainLayout;
