import React from "react";
import "./AboutUs.css";
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import discussion from './discussion.jpg';
import diversity from './diversity.jpg';
import world from './world.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faUsers, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal";

const AboutUs = () => (
  <div>
    <Container className="about-us-bg" fluid>
      <Row>
        <Fade left duration={1000} distance="80px">
          <div className="text-box">
            <h1>About Us</h1>
          </div>
        </Fade>
      </Row>
    </Container>
    <Fade top duration={1000} distance="80px">
      <Container className="paragraph">
        <Row>
          <Col sm={9}>
            <div className="text-box">
              <h1>We ignite opportunity by setting the world in motion</h1>
              <p>Good things happen when people can move, whether across town or toward their dreams. Opportunities appear,
                open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments
                of human connection as people around the world go all kinds of places in all kinds of ways with the help of
                our technology.</p>
            </div>
          </Col>
          <Col sm={3}>
          </Col>
        </Row>
      </Container>
    </Fade>
    <Container className="first-driver" fluid>
        <Row>
          <Fade bottom duration={1000} distance="80px">
            <div className="text-box">
              <h2>A Letter from our first driver</h2>
              <p> Read about Jackson's Journey from humble beginnings <br/> to owning his own fleet and becoming a shareholder.</p>
              <a href="#"> Read Jacksons's Letter</a>
            </div>
          </Fade>
        </Row>
    </Container>
    <Container className="about-rides" fluid>
      <Row className="paragraph first">
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="img">
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="text-box">
              <h2> Rides and beyond</h2>
              <p> In addition to giving riders a way to get from point A to point B, we're working to bring the future closer
                with self-driving technology and urban air transport, helping people order food quickly and affordably, removing
                barriers to healthcare, creating new freight-booking solutions, and helping companies provide a seamless employee
                travel experience. </p>
              <div className="links">
                <a href="#">How to use the <span>D2D</span> app</a>
                <a href="#">Our offerings</a>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row className="paragraph">
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="img-1">
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="text-box">
              <h2> Sustainability</h2>
              <p> Door2Door is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place
                in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility
                platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering
                riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs
                and the private sector to help expedite a clean and just energy transition.</p>
                <a href="#">Learn more</a>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row className="paragraph">
        <Col sm={6}>
          <Fade left duration={1000} distance="80px">
            <div className="text-box">
              <h2> Your Safety drives us</h2>
              <p> Whether you’re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and
                technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to
                help improve safety and help make it easier for everyone to get around.</p>
              <a href="#">Learn more</a>
            </div>
          </Fade>
        </Col>
        <Col sm={6}>
          <Fade right duration={1000} distance="80px">
            <div className="img-2">
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Container className="company-info" fluid>
      <div className="heading">
        <h1>Company Info</h1>
      </div>
      <Row>
        <Col sm={6}>
          <div className="img">
            <img
              src={discussion}
            />
          </div>
          <div className="text-box">
            <h3>Who's driving Door2Door</h3>
            <p> We’re building a culture within Uber that emphasizes doing the right thing, period, for riders,
              drivers, and employees. Find out more about the team that’s leading the way.</p>
            <a href="#"> Learn more</a>
          </div>
        </Col>
        <Col sm={6}>
          <div className="img-1">
            <img
              src={diversity}
            />
          </div>
          <div className="text-box-1">
            <h3>Getting diversity right</h3>
            <p> It’s our goal to create a workplace that is inclusive and reflects the diversity of the cities
              we serve—where everyone can be their authentic self, and where that authenticity is celebrated as
              a strength. By creating an environment where people from every background can thrive, we’ll make
              Uber a better company—for our employees and our customers.</p>
            <a href="#"> Learn more</a>
          </div>
        </Col>
      </Row>
    </Container>
    <Fade top duration={1000} distance="80px">
      <Container className="find-job" fluid>
          <Row>
              <Col sm={6}>
                <div className="text-box">
                  <h4> You've got the drive <br/> We've got the jobs</h4>
                  <a href="#">Find a job</a>
                </div>
              </Col>
              <Col sm={6}>
                <div className="img">
                  <img
                    src={world}
                  />
                </div>
              </Col>
          </Row>
      </Container>
    </Fade>
    <Container className="latest" fluid>
      <div className="heading">
        <h1>Stay up to date</h1>
      </div>
      <Row>
        <Container>
          <Row>
              <Col sm={4}>
                <div className="text-box">
                  <span><FontAwesomeIcon icon= {faBullhorn} size="lg" /></span>
                  <h4>Newsroom</h4>
                  <p>Get announcements about partnerships, app updates, initiatives, and more near you and around the world.</p>
                  <a href="#"> Learn more</a>
                </div>
              </Col>
              <Col sm={4}>
                <div className="text-box">
                  <span><FontAwesomeIcon icon= {faUsers} size="lg" /></span>
                  <h4>Blog</h4>
                  <p>Find new places to explore and learn about Uber products, partnerships, and more.</p>
                  <a href="#"> Learn more</a>
                </div>
              </Col>
              <Col sm={4}>
                <div className="text-box">
                  <span><FontAwesomeIcon icon= {faCircleNotch} size="lg" /></span>
                  <h4> Investor Relations</h4>
                  <p> Download financial reports, see next-quarter plans, and read about our corporate responsibility initiatives.</p>
                  <a href="#">Learn more</a>
                </div>
              </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  </div>
);

export default AboutUs;
