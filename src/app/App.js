import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.config";
import LinkPage from "./modules/links/components/LinkPage";
import FormPage from "./modules/links/components/FormPage";
import RedirectionPage from "./modules/links/components/RedirectionPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={FormPage} />
              <Route path="/manage-urls" component={LinkPage} />
              <Route path="/r/:hash" component={RedirectionPage} />
            </Switch>
          </HashRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
