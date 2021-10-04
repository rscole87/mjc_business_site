import React from "react";
import { Container, Row, Col } from "reactstrap";
import mtLogo from "../images/mt-logo-white.png";
import navLinks from "../shared/navLinks";

export default function Footer() {
  const links = navLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.url} className="footer-link">
          {link.text}
        </a>
      </li>
    );
  });

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm="4" className="d-flex flex-column flex-lg-row justify-content-center justify-content-sm-start">
              <div className="align-self-center mb-4 mb-sm-0">
                {/* <img src="" className="client-branding" alt="MJC Consulting" /> */}
                <strong>MJC Consulting, Inc.</strong>
              </div>
              <div className="d-none d-sm-block">
                <ul id="footer-nav" className="p-0 pl-lg-5 mt-3 mt-lg-0 d-flex flex-row flex-lg-column justify-content-around">
                  {links}
                </ul>
              </div>
            </Col>

            <Col sm="4" className="text-center text-sm-start mb-4 mb-sm-0 ps-sm-5 ">
              <address>
                P.O. Box 12345 <br /> Washington, D.C. 11111 <br />
                <a href="">(555) 555-5555 </a> <br />
                <a href="">information@mjcconsulting.com</a> <br />
              </address>
            </Col>

            <Col sm="4" className="text-center">
              <p>Website designed and developed by:</p>
              <a href="https://marbletheory.com/" target="_blank">
                <img src={mtLogo} id="mt-logo" alt="Marble Theory Design" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}