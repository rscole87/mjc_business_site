import React from "react";
import NavComponent from "./NavComponent";
import Jumbotron from "./ JumbotronComponent"
import About from "./AboutComponent";
import Services from "./ServicesComponent";

const Main = () => {
  return (
    <>
        <NavComponent />
        <Jumbotron />
        <About />
        <Services />
    </>
)
};

export default Main;
