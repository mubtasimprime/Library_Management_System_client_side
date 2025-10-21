import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AuthLayout = () => {
  return (
    <>
      <section className="font">
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default AuthLayout;
