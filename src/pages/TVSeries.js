import React from "react";
import Footer from "../components/footer/Footer";
import { NavBar } from "../components/header/Header";
import AllSeries from "../components/tv/AllSeries";

const TVSeries = () => {
  return (
    <div>
      <NavBar />
      <div className="spacer"></div>
      <h2 className="text-center">TV Series</h2>
      <div className="spacer"></div>
      <AllSeries />
      <div className="spacer"></div>
      <Footer />
    </div>
  );
};

export default TVSeries;
