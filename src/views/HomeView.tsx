import React from "react";
import Hero from "../components/Hero/Hero";
import HeroStats from "../components/HeroStats/HeroStats";

const HomeView = () => {
  return (
    <section className="sectionContainer">
      <Hero />
      <HeroStats />
    </section>
  );
};

export default HomeView;
