import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { css } from "emotion";
import { Grid, Navbar } from "react-bootstrap";

const activeStyle = css`
  font-weight:  bold;
  color: black;
`;


class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">
            <strong>Fostly</strong>
          </h1>
        </header>
        <div className="App-intro">
          <Navbar>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <NavLink
                    to="/"
                    exact
                    activeClassName={activeStyle}
                  >
                    Home
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Brand>
                  <NavLink
                    exact
                    to="/manage-urls"
                    activeClassName={activeStyle}
                  >
                    Manage URLs
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
