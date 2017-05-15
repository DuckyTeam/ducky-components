import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
export default props => {
  return (
    <Caption2Strong className={props.className} onClick={props.onClick}>
      {props.children}
    </Caption2Strong>
  );
};

Caption2Strong.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
