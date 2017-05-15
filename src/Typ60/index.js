import React from "react";
import styled from "styled-components";
import Display1 from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Display1 className={props.className} onClick={props.onClick}>
      {props.children}
    </Display1>
  );
};

Display1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
