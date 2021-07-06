import React, { useState } from "react";
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Row, Col, Nav, Form, Button, DropdownButton, Dropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserCircle, faCar, faArrowCircleRight, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalDialog, ModalHeader, ModalTitle, ModalBody} from 'react-bootstrap'

const Navigation = () => {

const [isOpen, setOpen] = useState(false);
const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [show2, setShow2] = useState(false);


  return (

    <Navbar sticky="top" className="navbar" >
      <Navbar.Brand href="/" className="navbar-brand">Door2Door</Navbar.Brand>
      <Nav className="nav-left" activeKey="/home">
        <Nav.Item>
          <NavLink exact
           className="navbar-item"
           to="/driver"
           >
           Driver
           </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="navbar-item"
            to="/rider"
            >
            Rider
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <Dropdown  >
            <Dropdown.Toggle className="nav-dropdown">
              Company
            </Dropdown.Toggle>
            <Dropdown.Menu  className="dropdown-menu">
              <Dropdown.Item href="/aboutUs" >About us</Dropdown.Item>
              <Dropdown.Item href="/safety">Safety</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="navbar-item"
            to="/covid19"
            >
            COVID-19 resources
          </NavLink>
        </Nav.Item>
      </Nav>
      <Nav className="nav-right">
        <Nav.Item>
          <NavLink
            className="navbar-item"
            to=""
            onClick={() => setShow1(true)}
            >
             <FontAwesomeIcon icon= {faUser} size="lg" className="font-icon" /> Log In
          </NavLink>
          <Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="my-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title >
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <Col sm={6}>
                    <div className="log-in">
                      <FontAwesomeIcon icon= {faUser} size="xs" /><a href="/signInRide"> Sign in to ride </a>
                      <span><FontAwesomeIcon icon= {faArrowCircleRight} size="sm" /></span>
                    </div>
                  </Col>
                  <Col sm={6}>
                  <div className="log-in">
                    <FontAwesomeIcon icon= {faCar} size="xs" /><a href="/signInDrive"> Sign in to drive</a>
                    <span><FontAwesomeIcon icon= {faArrowCircleRight} size="sm" /></span>
                  </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="navbar-item"
            to=""
            onClick={() => setShow(true)}
            >
            Sign Up
          </NavLink>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="my-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title >
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <Col sm={6}>
                    <div className="log-in">
                      <FontAwesomeIcon icon= {faUser} size="xs" /><a href="/signInRide"> Become a new rider </a>
                      <span><FontAwesomeIcon icon= {faArrowCircleRight} size="sm" /></span>
                    </div>
                  </Col>
                  <Col sm={6}>
                  <div className="log-in">
                    <FontAwesomeIcon icon= {faCar} size="xs" /><a href="/signInDrive"> Create a driver account</a>
                    <span><FontAwesomeIcon icon= {faArrowCircleRight} size="sm" /></span>
                  </div>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            className="navbar-item"
            to=""
            onClick={() => setShow2(true)}
            >
            <FontAwesomeIcon icon= {faGlobeAfrica} size="lg"  className="font-icon" /> EN
          </NavLink>
          <Modal
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="my-modal-2"
          >
            <Modal.Header closeButton>
              <Modal.Title className="title" >
                <h1>Select your preffered language</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <Row>
                  <div className="preffered-language">
                  <a href="#" className="english"> English</a>
                  </div>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </Nav.Item>
      </Nav>
    </Navbar>


  );
 };

 export default Navigation;
