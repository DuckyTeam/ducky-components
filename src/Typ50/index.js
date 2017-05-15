import React from "react";
import styled from "styled-components";
import Header1 from "./elements";
import PropTypes from "prop-types";

export default props => {
  return (
    <Header1 className={props.className} onClick={props.onClick}>
      {props.children}
    </Header1>
  );
};

Header1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
