import React from "react";
import styled from "styled-components";
import IngressStrong from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <IngressStrong className={props.className} onClick={props.onClick}>
      {props.children}
    </IngressStrong>
  );
};

IngressStrong.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
