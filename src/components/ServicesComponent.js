import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Services = () => {
  return (
    <>
      <section id="services-section">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>Services we offer</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Card className="service-card">
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <button className="btn btn-primary">Learn More</button>
                </CardBody>
              </Card>
            </div>

            <div className="col">
              <Card className="service-card">
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <button className="btn btn-primary">Learn More</button>
                </CardBody>
              </Card>
            </div>

            <div className="col">
              <Card className="service-card">
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <button className="btn btn-primary">Learn More</button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
