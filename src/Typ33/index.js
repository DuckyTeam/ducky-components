import React from "react";
import styled from "styled-components";
import ButtonText from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <ButtonText className={props.className} onClick={props.onClick}>
      {props.children}
    </ButtonText>
  );
};

ButtonText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
