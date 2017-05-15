import React from "react";
import styled from "styled-components";
import Display2 from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Display2 className={props.className} onClick={props.onClick}>
      {props.children}
    </Display2>
  );
};

Display2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
