import React, { useState } from "react";
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from "react-router-dom";
import {Container, Nav, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

const [isOpen, setOpen] = useState(false);

  return (

    <div className="footer" >
      <Container className="" >
        <Row className="content">
          <Col sm>
            <h5  className="title"><span>Door2Door</span></h5>
            <ul >
              <li>Careers</li>
              <li>Business</li>
              <li>Bikes</li>
              <li>Rentals</li>
              <li>Scooters</li>
              <li>Self Driving</li>
              <li>Developerrs</li>
              <li>Investor Relations</li>
              <li>Press</li>
            </ul>
          </Col>
          <Col sm>
            <h5 className="title"> Rider</h5>
            <ul>
              <li>Sign-Up to ride</li>
              <li>Fare Estimate</li>
              <li>Door2Door Pink</li>
              <li>Rewards</li>
              <li>Cities</li>
              <li>Help</li>
              <li>Safety</li>
              <li>Business Profile</li>
              <li>Airports</li>
              <li>Gift Cards</li>
              <li>Donate</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col sm>
            <h5 className="title"> Driver</h5>
            <ul>
              <li>Become a driver</li>
              <li>Earnings</li>
              <li>Bonus</li>
              <li>Door2Door Rewards</li>
              <li>Application Requirements</li>
              <li>Express Drive</li>
              <li>Cities</li>
              <li>Help</li>
              <li>Insurance</li>
              <li>Jobs</li>
              <li>Hub</li>
              <li>Safety</li>
            </ul>
          </Col>
          <Col sm>
            <ul>
            <div className=" ">
              <Button className="footer-btns footer-drive-btn"><span>D2D</span> driver app</Button>
              <Button className="footer-btns footer-ride-btn"><span>D2D</span> rider app</Button>
              <Button className="footer-btns footer-web-btn">Ride on web</Button>
            </div>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="tiny-footer">
          <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
           <Nav.Link className="footer-item terms">Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link className="footer-item privacy">Privacy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link className="footer-item "><FontAwesomeIcon icon= {faCopyright} size="lg" /> 2021 D2D, INC.</Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link className="footer-item twitter"><FontAwesomeIcon icon= {faTwitter} size="lg" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link className="footer-item facebook"><FontAwesomeIcon icon= {faFacebook} size="lg" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
           <Nav.Link className="footer-item instagram"><FontAwesomeIcon icon= {faInstagram} size="lg" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>


  );
 };

 export default Footer;
