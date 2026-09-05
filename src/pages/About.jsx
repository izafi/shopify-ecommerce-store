import React from "react";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutStats from "../components/about/AboutStats";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutFeatures />
      <AboutCTA />
    </main>
  );
};

export default About;