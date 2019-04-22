import React, { Component } from "react";
import Links from "../containers/Links";
import Header from "../../../components/header";
import ErrorBoundary from "../../../ErrorBoundary";

class LinkPage extends Component {
  render() {
    return (
      <div id="links" className="App">
        <Header />
        <h1>Manage your links</h1>
        <ErrorBoundary>
          <Links />
        </ErrorBoundary>
      </div>
    );
  }
}
export default LinkPage;
