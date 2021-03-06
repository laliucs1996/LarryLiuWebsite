import React, { Component } from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from "react-social-icons";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      color: "#61dafb"
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="Home">
        <Navbar fixed="top" bg="light" expand="sm">
          <Navbar.Brand href="/aboutMe">
            <h1>Larry Liu</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/aboutMe">
                <h5
                  style={{
                    color: this.state.color
                  }}
                >
                  Home
                </h5>
              </Nav.Link>
              {/* <Nav.Link href="/aboutMe">
                <h5>About Me</h5>
              </Nav.Link> */}
              <Nav.Link href="/resume">
                <h5>Resume</h5>
              </Nav.Link>
              <Nav.Link href="/projects">
                <h5>Projects</h5>
              </Nav.Link>
              <Nav.Link />
              <SocialIcon url="https://github.com/laliucs1996" />
              <Nav.Link />
              <SocialIcon url="https://www.linkedin.com/in/larry-liu-d1996" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <header className="App-header">
          <p className="four">
            Hi! My name is Larry! <br /> Welcome to my Website!
          </p>
        </header>
      </div>
    );
  }
  componentDidMount() {
    document.title = "My Home!";
  }
}

export default Home;
