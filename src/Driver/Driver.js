import React from "react";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Driver.css";
import FormControl from 'react-bootstrap/FormControl';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from './apply-to-drive.jpg';
import imageTwo from './learn-more-app.jpg';
import imageThree from './pick-up.jpg';
import imageFour from './check-earnings.jpg';
import Fade from "react-reveal";

const Driver = () => (
  <div>
    <Container className="apply" fluid>
      <Row>
        <Fade bottom duration={1000} distance="80px">
          <div className="text-box">
            <h4> Start A New Journey</h4>
            <h1> Control Your Destiny, Get On The Road <br/>  Sign Up Today </h1>
          </div>
        </Fade>
      </Row>
      <Row>
        <Fade bottom duration={1000} distance="80px">
          <Form inline>
            <div class="input-wrapper">
              <FormControl type="text" placeholder="Enter Mobile Phone Number" className="mr-sm-2 input-text" />
            </div>
          </Form>
        </Fade>
      </Row>
      <Row>
        <Fade bottom duration={1000} distance="80px">
          <div className="form-group terms">
            <Button className="btn">Apply to drive</Button>
            <input type="checkbox" className="terms-conditions"  />
            <label> I agree to the Door2Door terms</label>
          </div>
        </Fade>
      </Row>
    </Container>
    <Fade bottom duration={1000} distance="80px">
      <Container className="driver-learn-more">
        <Row>
          <Col sm={{ span: 3, offset: 1 }}>
            <h2> Reliable earnings</h2>
            <p> Take home more of the fare with Door2Door's competitive service fees and additional bonuses. When you're ready, cash out instantly.</p>
            <a href="#"> Make Money</a>
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <h2>Be in control </h2>
            <p>Pick up nearby riders or choose when and where to drive. Take on new trips at any time.</p>
            <a href="#"> Start A Ride</a>
          </Col>
          <Col sm={{ span: 3, offset: 1 }}>
            <h2> A few necessities</h2>
            <p>You’ll need to meet the age requirement for your region, have a smartphone, and pass an online DMV and background check.
              Requirements vary across cities.</p>
            <a href="#">Find Your City</a>
          </Col>
        </Row>
      </Container>
    </Fade>
    <Container className="carousel-background" fluid>
    </Container>
    <Container fluid>
      <Carousel className="carousel" >
        <Carousel.Item className="carousel-item" interval={5000}>
          <img
            className="d-block w-40 h-75"
            src={imageOne}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption" >
            <div className="title">
            <h3>How does Door2Door work?</h3>
            </div>
            <h4> Step 1</h4>
            <p> <a> Apply to drive</a> and get approved</p>
          </Carousel.Caption >
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={5000}>
          <img
            className="d-block w-50 h-75"
            src={imageTwo}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>How does Door2Door work?</h3>
            <h4> Step 2</h4>
            <p>Get the app on <a> Apple App Store</a> or <a>Google Play</a> .</p>
            <a>Learn More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item text-center"  interval={5000}>
          <div className="image-container">
          <img
            className="d-block w-25 h-75"
            src={imageThree}
            alt="Third slide"
          />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3>How does Door2Door work?</h3>
            <h4> Step 3</h4>
            <p>Accept rides and earn money</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item"  interval={5000}>
          <img
            className="d-block w-20 h-75"
            src={imageFour}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>How does Door2Door work?</h3>
            <h4> Step 4</h4>
            <p>Cash Out instantly.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </Container>
    <Container className="sign-up " fluid>
    <Button className="sign-up-btn">Sign-Up</Button>
    </Container>

  </div>
);

export default Driver;
