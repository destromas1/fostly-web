import React, { Component } from "react";
import { connect } from "react-redux";
import { validateUrl, copyTextToClipboard } from "../../../utilities/utils";
import { createLink } from "../actions";

class LinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      shortLink: undefined
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.shortenLink = this.shortenLink.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
  }

  copyToClipboard(event) {
    event.preventDefault();
    copyTextToClipboard(this.state.shortLink);
  }

  shortenLink(event) {
    event.preventDefault();
    const { url } = this.state;
    if (!validateUrl(url)) return false;

    this.props.createLink(url).then(resp => {
      this.setState({ url: "" });
      this.setState({
        shortLink: `${window.location.origin}/#/r/${resp.hash}`
      });
    });
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.shortenLink}>
          <div className="form-group">
            <input
              type="text"
              style={{ width: "555px" }}
              className="form-control"
              id="linkToShorten"
              data-cy="urlToShorten"
              placeholder="write a link to shorten it"
              value={this.state.url}
              onChange={this.handleUrlChange}
            />
          </div>

          <button type="submit" data-cy="submitShorten" className="btn btn-primary">
            <strong>Shorten</strong>
          </button>
        </form>

        <br />

        {this.state.shortLink && (
          <div>
            <strong>{this.state.shortLink}</strong>
            <button data-cy="copyToClip" className="btn" onClick={this.copyToClipboard}>
              Copy URL
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createLink: link => dispatch(createLink(link))
});

export default connect(
  null,
  mapDispatchToProps
)(LinkForm);
