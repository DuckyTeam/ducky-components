import React from "react";
import styled from "styled-components";
import BodyTextNormal from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <BodyTextNormal className={props.className} onClick={props.onClick}>
      {props.children}
    </BodyTextNormal>
  );
};

BodyTextNormal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
