import React from "react";
import * as about from "../../components";

const About = () => {
  return (
    <>
      <about.AboutHeader />
      <about.AboutGallery />
      <about.Story />
      <about.Features />
      <about.Team />
      <about.Values />
    </>
  );
};

export default About;
