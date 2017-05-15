import React from "react";
import styled from "styled-components";
import { Caption2Normal } from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Caption2Normal className={props.className} onClick={props.onClick}>
      {props.children}
    </Caption2Normal>
  );
};

Caption2Normal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
