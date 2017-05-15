import React from "react";
import styled from "styled-components";
import IngressTitles from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <IngressTitles className={props.className} onClick={props.onClick}>
      {props.children}
    </IngressTitles>
  );
};

IngressTitles.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
