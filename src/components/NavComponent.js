import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from "reactstrap";
import navLinks from "../shared/navLinks";


const NavComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    if (isNavOpen === true) {
      toggleNav();
    }
  };

  const links = navLinks.map((link) => {
    return (
      <NavItem key={link.id} onClick={() => closeNav()}>
        <a className="nav-link" href={`/${link.url}`}>
          {link.text}
        </a>
      </NavItem>
    );
  });

  return (
    <>
      <Navbar id="main-nav" light expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href={`/#header-section`}>
            {/* <img className="nav-logo" src="" height="50" alt="Consult Business" /> */}
            <strong>Consult Business</strong>
            
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} className="justify-content-end" navbar>
            <Nav className="text-center" navbar>
              {links}
              <NavItem>
                <a id="contact-link" className="nav-link px-3" href="#contact-section" onClick={() => closeNav()}>
                  Contact
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavComponent;