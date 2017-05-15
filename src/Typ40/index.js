import React from "react";
import styled from "styled-components";
import IngressNormal from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <IngressNormal className={props.className} onClick={props.onClick}>
      {props.children}
    </IngressNormal>
  );
};

IngressNormal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
