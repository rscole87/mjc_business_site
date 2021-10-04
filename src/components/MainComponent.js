import React from "react";
import NavComponent from "./NavComponent";
import Jumbotron from "./ JumbotronComponent"
import About from "./AboutComponent";
import Services from "./ServicesComponent";
import Footer from "./FooterComponent";

const Main = () => {
  return (
    <>
        <NavComponent />
        <Jumbotron />
        <About />
        <Services />
        <Footer />
    </>
)
};

export default Main;
