import React, { useEffect } from "react";
import HomeView from "../views/HomeView";

const Home = ({ changeColor }: { changeColor: Function }) => {
  useEffect(() => {
    changeColor("#fff");
  }, [changeColor]);
  return <HomeView />;
};

export default Home;
