import React, { Component } from "react";
import Header from "../../../components/header";
import LinkForm from "../containers/LinkForm";

class FormPage extends Component {
  render() {
    return (
      <div id="form" className="App">
        <Header />
        <div>
          <LinkForm />
        </div>
      </div>
    );
  }
}

export default FormPage;
