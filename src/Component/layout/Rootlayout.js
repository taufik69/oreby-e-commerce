import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Fotter";
const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
