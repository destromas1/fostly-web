import React, { Component } from "react";

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      editedUrl: this.props.data.url
    };

    this.handleEditedUrlChange = this.handleEditedUrlChange.bind(this);
    this.editLink = this.editLink.bind(this);
  }

  handleEditedUrlChange(event) {
    this.setState({ editedUrl: event.target.value });
  }

  editLink() {
    if (!this.state.isEdited) {
      this.setState({ isEdited: true });
    } else {
      this.props.updateLink(this.props.data.id, this.state.editedUrl);
      this.setState({ isEdited: false });
    }
  }

  render() {
    const { url, hash, id } = this.props.data;
    return (
      <React.Fragment>
        <tr>
          <td>
            {this.state.isEdited ? (
              <input
                type="text"
                className="form-control"
                placeholder="write a link to shorten it"
                value={this.state.editedUrl}
                onChange={this.handleEditedUrlChange}
              />
            ) : (
              url
            )}
          </td>
          <td>{hash}</td>
          <td>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.props.deleteLink(id)}
            >
              Delete
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.editLink}
            >
              {!this.state.isEdited ? "Edit" : "Update"}
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Link;
