import React from "react";
import styled from "styled-components";
import Display3 from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Display3 className={props.className} onClick={props.onClick}>
      {props.children}
    </Display3>
  );
};

Display3.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
