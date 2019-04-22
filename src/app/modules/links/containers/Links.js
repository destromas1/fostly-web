import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { fetchLinks, removeLink, updateLink } from "../actions";
import Link from "../components/Link";
import { getLinks } from "../selectors";

const listStyle = css`
  text-align: left;
`;

class Links extends Component {
  constructor(props) {
    super(props);
    this.deleteLink = this.deleteLink.bind(this);
    this.updateLink = this.updateLink.bind(this);
  }

  componentDidMount() {
    this.props.fetchLinks();
  }

  deleteLink(id) {
    this.props.removeLink(id);
  }

  updateLink(id, editedUrl) {
    this.props.updateLink(id, editedUrl);
  }

  render() {
    const { links } = this.props;

    return (
      <div id="links" className={listStyle}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, i) => {
              return (
                <Link
                  key={link.id}
                  data={link}
                  deleteLink={this.deleteLink}
                  updateLink={this.updateLink}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const links = getLinks(state);
  return {
    links
  };
}

const mapDispatchToProps = dispatch => ({
  fetchLinks: () => dispatch(fetchLinks()),
  removeLink: id => dispatch(removeLink(id)),
  updateLink: (id, editedUrl) => dispatch(updateLink(id, editedUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Links);
