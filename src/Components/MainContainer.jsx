import React from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const MainContainer = () => {
  return (
    <div className="flex overflow-auto bg-gray-100 w-dvh h-lvh">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default MainContainer;
