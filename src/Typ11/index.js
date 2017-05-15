import React from "react";
import styled from "styled-components";
import { Caption1Strong } from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Caption1Strong className={props.calssName} onClick={this.props.onClick}>
      {props.children}
    </Caption1Strong>
  );
};

Caption1Strong.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
