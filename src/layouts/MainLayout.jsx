import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="shadow-md">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
