import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
const Weblayouts = () => {
  return (
    <>
      <Navbar />
      {/* <Suspense> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Weblayouts;
