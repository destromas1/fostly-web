import React from "react";
import { css } from "emotion";

const errorStyle = css`
  padding-top: 10px;
  display: flex;
  color: red;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  min-height: 130px;
  align-items: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log("compoentDidCatch Fired...");
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <div className={errorStyle}>Sorry - this shouldn't happen!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
