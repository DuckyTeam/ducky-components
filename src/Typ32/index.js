import React from "react";
import styled from "styled-components";
import BodyTextTitles from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <BodyTextTitles className={props.className} onClick={props.onClick}>
      {props.children}
    </BodyTextTitles>
  );
};

BodyTextTitles.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
