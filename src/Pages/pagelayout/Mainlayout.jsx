
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Mainlayout;
