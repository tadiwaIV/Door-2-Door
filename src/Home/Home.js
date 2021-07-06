import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faMapPin, faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import RentACar from './rent-a-car.jpg';
import Safety from './safety.jpg';
import Money from './money.jpg';
import Globe from './globe.jpg';
import Fade from "react-reveal";

const Home = () => (
  <div>
    <Container className="drive" fluid>
      <Row>
        <Col sm className="img-container">
          <div className="home-image">
          </div>
        </Col>
        <Col sm className="justify-content-left">
          <Fade bottom duration={1000} distance="80px">
            <div className="text-box">
              <h4> Get On the Move</h4>
              <h1> No Matter Where, <br/> No Matter When </h1>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="80px">
            <div className="btns">
              <Button className="buttons apply-btn">Apply to Drive</Button>
              <Button className="buttons ride-btn">Start a Ride</Button>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="fresh-news" >
      <h4 className="heading"> Fresh News</h4>
      <Row className="content">
        <Col className="column">
          <Fade left duration={1000} distance="80px">
            <Card style={{ width: '30rem' }} className="card">
              <Card.Img variant="top" src={RentACar} className="img justify-content-center" />
              <Card.Body>
                <Card.Title className="title">Engaged Driver Community</Card.Title>
                <Card.Text>
                  Enjoyable and interwoven experience being a member of the <span>Door2Door</span> driver community.
                  Start making great money with competitive service fees, localized support and pioneering safety features.
                </Card.Text>
                <Card.Link href="#" className="link">Learn More About The Driver Community</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col className="">
          <Fade right duration={1000} distance="80px">
            <Card style={{ width: '30rem' }} className="card card-2">
              <Card.Img variant="top" src={Safety} className="img" />
              <Card.Body>
                <Card.Title className="title">Your Health &amp; Safety Is Our Top Priority</Card.Title>
                <Card.Text >
                  Take it easy, knowing that <span>Door2Door</span> is just as concerned about your safety as you are. To keep everybody safe,
                  all riders and drivers must agree to a few basic rules, such as wearing a face mask and keeping the car (and
                  their hands) clean.
                </Card.Text>
                <Card.Link href="#" className="link">View Health &amp; Safety Guidelines</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
      <Row className="">
        <Col className="column second">
          <Fade left duration={1000} distance="80px">
            <Card style={{ width: '30rem' }} className="card">
              <Card.Img variant="top" src={Money} className="img" />
              <Card.Body>
                <Card.Title className="title">Maximize your earnings</Card.Title>
                <Card.Text>
                  Take home more of the fare with <span>Door2Door</span> competitive service fees and additional bonuses.
                </Card.Text>
                <Card.Link href="#" className="link">Learn More About Your Earnings</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col className="second">
          <Fade right duration={1000} distance="80px">
            <Card style={{ width: '30rem' }} className="card card-2">
              <Card.Img variant="top" src={Globe} className="img" />
              <Card.Body>
                <Card.Title className="title">Setting 1000+ cities in motion</Card.Title>
                <Card.Text>
                  The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.
                </Card.Text>
                <Card.Link href="#" className="link">View all Cities</Card.Link>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="key-features" fluid>
      <h1 className="heading"> Key Features</h1>
      <Row className="list">
        <Col>
          <h5> <FontAwesomeIcon icon= {faShieldAlt} size="lg" /> Safety &amp; Privacy</h5>
          <ul>
            <li>In-app Instant Messenger</li>
            <li>Ride Check</li>
            <li>Private Number ID</li>
            <li>Ride Share</li>
            <li>Remove Rider</li>
            <li>Safety Training</li>
          </ul>
        </Col>
        <Col>
          <h5> <FontAwesomeIcon icon= {faMapPin} size="lg" /> Destination</h5>
          <ul>
            <li>Destination Preview</li>
            <li>Filter Ride Destination</li>
            <li>Preview Ride Distance</li>
          </ul>
        </Col>
        <Col>
          <h5> <FontAwesomeIcon icon= {faHeadphonesAlt} size="lg" /> Support</h5>
          <ul>
            <li>24/7 Dedicated Customer Support team</li>
            <li>In-app Service Center</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
