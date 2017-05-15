import React from "react";
import styled from "styled-components";
import { Caption1Normal } from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Caption1Normal className={props.className} onClick={props.onClick}>
      {props.children}
    </Caption1Normal>
  );
};

Caption1Normal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
