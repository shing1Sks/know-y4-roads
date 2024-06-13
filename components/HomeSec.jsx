import React from "react";
import Welcome from "./Home/Welcome";
import Map from "./Map";
import About from "./About";
import AddRoad from "./AddRoad";

function HomeSec() {
  return (
    <div>
      <div className="min-h-screen w-full dark:bg-blue-800 bg-blue-200  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col pt-[75px] pb-10">
        <Welcome />
        <Map />
        <About />
        <AddRoad />
      </div>
    </div>
  );
}

export default HomeSec;
