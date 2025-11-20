import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-[1400px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
