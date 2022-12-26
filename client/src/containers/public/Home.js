import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
