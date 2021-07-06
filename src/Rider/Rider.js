import React from "react";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import './Rider.css';
import hailingImg from './hailing-image.jpg';
import cash from './cash.jpg';
import time from './time.jpg';
import safety from './safety.jpg';
import thumbs from './thumbs.jpg';
import Fade from "react-reveal";

const Rider = () => (
  <div>
    <Container className="bg-img" fluid>
      <Row>
        <Fade left duration={1000} distance="80px">
          <div className="text-box">
            <h5> Re-discover your world.</h5>
            <h1>Set out on the <br/> road and explore.</h1>
          </div>
        </Fade>
      </Row>
    </Container>
    <Container className="hailing" >
      <Row>
        <Col sm={{ span: 4, offset: 1 }}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
              <img
                src={cash}
              />
            </div>
            <div className="text-box">
              <h4> Affordable Fares</h4>
              <p> Let your rand travel further with Door2Door's everyday low fares and offers. </p>
            </div>
          </Fade>
        </Col>
        <Col sm={{ span: 4, offset: 2 }}>
          <Fade right duration={1000} distance="80px">
            <div className="img">
              <img
                src={safety}
              />
            </div>
            <div className="text-box">
              <h4> Safety first</h4>
              <p> Get added peace of mind when you ride with pre-screened drivers, built-in safety features, and pay as you
                go with secure cashless payments. </p>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 4, offset: 1 }}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
              <img
                src={time}
              />
            </div>
            <div className="text-box">
              <h4> Quick & Reliable</h4>
              <p> Your ride is ready in minutes. Break free from timetables and request a ride on your own watch. </p>
            </div>
          </Fade>
        </Col>
        <Col sm={{ span: 4, offset: 2 }}>
          <Fade right duration={1000} distance="80px">
            <div className="img">
              <img
                src={thumbs}
              />
            </div>
            <div className="text-box">
              <h4> Happy drivers equals happy rides</h4>
              <p>With an average industry-leading Services Fee, every ride taken with Door2Door allows South African
                rideshare drivers to earn more of the fare.</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="rush-hour">
      <Row>
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="text-box">
              <h2> Rush-hour rides for <br/> When your're in a rush.</h2>
              <p> Your shift starts at 8. Happy hour on the patio only lasts for an hour. And your latest at-home haircut
                attempt needs a professional fix ASAP. We’ll match you with a driver in seconds, show you the quickest bus
                route, or help you find the nearest scooter. </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="estimate" fluid>
      <Container>
      <Row>
        <div className="text-box">
          <h1> Ready to go somewhere? Get a fare estimate.</h1>
        </div>
      </Row>
      <Row>
        <div className="calculate-estimate">
          <input type="text" placeholder="Enter pick-up location *" className="mr-sm-2 input-text" />
          <input type="text" placeholder="Enter drop-off location *" className="mr-sm-2 input-text" />
          <Button className="btn">Get Estimate</Button>
        </div>
      </Row>
      </Container>
    </Container>
    <Container className="health-safety">
      <Row>
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="text-box">
              <h2>Health &amp; safety go <br/> hand-in-sanitized-hand</h2>
              <p>We built our services with your safety in mind. You can see car and driver details right there in your
                app, share route and location info with friends, or request assistance in case of an emergency. And these
                days, we’re going the extra mile to help protect each other from COVID-19. You can count on a clean car,
                fresh air, and masked faces to keep riders and drivers happy and healthy. </p>
              <a>Learn more about ride safety</a>
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="img">
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="gift-card" fluid >
      <Container className="rewards">
        <Row>
          <Col sm={6}>
            <div className="img">
            </div>
          </Col>
          <Col sm={6}>
            <div className="text-box">
              <h2>Give the gift of getting around.</h2>
              <p> You want to give them the whole world. We can’t help with that. But we can help with the gift
                of rides to get around in the world. Lyft gift cards are good for fast, easy rides in cars or
                on a bike or scooter. </p>
              <Button className="btn">Get Estimate</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default Rider;
