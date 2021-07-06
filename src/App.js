import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Container, Row, Col, Media} from 'react-bootstrap';
import Driver from "./Driver/Driver.js"
import Home from "./Home/Home.js"
import Rider from "./Rider/Rider.js"
import Company from "./Company/Company.js"
import Covid19 from "./Covid19/Covid19.js"
import AboutUs from "./AboutUs/AboutUs.js"
import Safety from "./Safety/Safety.js"
import Help from "./Help/Help.js"
import Blog from "./Blog/Blog.js"
import SignUp from "./Sign Up/Sign Up.js"
import LogIn from "./Log In/Log In.js"
import SignInRide from "./Log In/SignInRide.js"
import SignInDrive from "./Log In/SignInDrive.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/driver">
          <Driver />
        </Route>
        <Route path="/rider">
          <Rider />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/covid19">
          <Covid19 />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/safety">
          <Safety />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signInRide">
          <SignInRide />
        </Route>
        <Route path="/signInDrive">
          <SignInDrive />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
