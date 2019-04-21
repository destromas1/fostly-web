import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUrlByHash } from "../actions";

class FormPage extends Component {
  componentWillMount() {
    const { match } = this.props;
    if (!match.params || !match.params.hash) return;
    this.props.fetchUrlByHash(match.params.hash).then(link => {
      window.location.replace(link.url);
    });
  }

  render() {
    return <div className="App" />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUrlByHash: hash => dispatch(fetchUrlByHash(hash))
});

export default connect(
  null,
  mapDispatchToProps
)(FormPage);
