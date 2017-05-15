import React from "react";
import styled from "styled-components";
import BodyTextStrong from "./elements";
import PropTypes from "prop-types";
s;
export default props => {
  return (
    <BodyTextStrong className={props.className} onClick={props.onClick}>
      {props.children}
    </BodyTextStrong>
  );
};

BodyTextStrong.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
