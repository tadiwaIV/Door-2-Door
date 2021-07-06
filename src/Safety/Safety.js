import React from "react";
import './Safety.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCar } from "@fortawesome/free-solid-svg-icons";
import backseat from './backseat.jpg';
import sanatize from './sanatize.jpg';
import rider from './rider.jpg';
import driver from './driver.jpg';
import partner from './partners.jpg';
import Fade from "react-reveal";

const Safety = () => (
  <div className="safety">
    <Container className="committment" >
      <Row>
        <Col sm={9}>
          <div className="headline">
            <h1>We are committed to keeping you safe</h1>
            <p>You deserve to be able to move safely. To look forward to the opportunities ahead. To be connected to
              people and places that matter most. Which is why we’re focused on your safety, from setting new standards
              to developing technology with the goal of reducing incidents.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="img">
            <img
              src={backseat}
            />
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col sm={8}>
          <div className="covid-safety">
            <h1>Helping to keep each other safe during COVID-19</h1>
            <p>We’re actively monitoring the coronavirus (COVID-19) situation and are continually working
              to help keep those who rely on our platform healthy and safe.</p>
            <div className="links">
              <a href="#"> Go to <span>D2D</span>'s COVID-19 hub</a>
              <a href="#"> Read about our new Door-to-Door Safety Standard</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="hygiene-supplies" fluid>
      <Row>
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
              <img
                src={sanatize}
              />
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="hygiene-next-ride">
              <h1>Hygiene supplies in your next ride</h1>
              <p>As part of our Door-to-Door Safety Standard, we’re working on ensuring high standards of hygiene.
                This includes providing hygiene supplies like Lifebuoy Hand Sanitiser and Handy Andy hygiene wipes
                to drivers* so that you can feel safer on your next ride.</p>
              <i>*While supplies last and subject to availability. Uber is not responsible for the products or
                services offered by other companies, and makes no claims about the effectiveness, medical or health
                benefits related to the use of such products or services.</i>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="safety-experience" fluid>
      <div className="heading">
        <h1> How safety is built into your experience</h1>
      </div>
      <Row className="experience">
        <Col sm={4}>
          <div className="text-box">
            <h4>Safety features in the app</h4>
            <p>Tap a button for emergency assistance. Share your trip details with loved ones. Our technology
              helps put peace of mind at your fingertips.</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="text-box">
            <h4>An inclusive community</h4>
            <p>Millions of riders and drivers share a set of Community Guidelines, holding each other accountable
              to do the right thing.</p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="text-box">
            <h4>Support at every turn</h4>
            <p>A specially trained team is available 24/7. Reach them in the app, day or night, with any questions
              or safety concerns.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="safety-journey">
      <div className="heading">
        <h1> How safety is built into your experience</h1>
      </div>
      <Row className="">
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
              <img
                src={driver}
              />
            </div>
            <div className="text-box">
              <span><FontAwesomeIcon icon= {faCarSide} size="lg" /></span>
            </div>
            <div className="driver-rider-safety">
              <h4>Driver safety</h4>
              <p>Count on 24/7 support and emergency assistance. Share your trip with loved ones. Our focus is on your
                safety, so you can focus on the opportunity.</p>
              <a href="#"> Learn more</a>
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="img">
              <img
                src={rider}
              />
            </div>
            <div className="text-box">
              <span><FontAwesomeIcon icon= {faCar} size="lg" /></span>
            </div>
            <div className="driver-rider-safety">
              <h4>Rider safety</h4>
              <p>Millions of rides are requested every day. Every rider has access to safety features built into the app.
                And every ride has a support team if you need them.</p>
              <a href="#"> Learn more</a>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className='partnership'>
      <Row>
        <Col sm={6}>
          <div className="text-box">
            <h2> Partnering to make a difference</h2>
            <p> Our commitment to safety goes beyond your ride. We have teamed up with leading experts—from
              public safety officials to anti-violence organizations—to help make roads and cities safer for
              all.</p>
            <a href="#">Learn more</a>
          </div>
        </Col>
        <Col sm={6}>
          <div className="img">
          <img
            src={partner}
          />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Safety;
