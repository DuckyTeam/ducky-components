import React from 'react';
import Linkify from 'react-linkify';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function TextWithLinks(props) {
  return (
    <Linkify properties={{target: '_blank', className: styles.link}}>
      {props.children}
    </Linkify>
  );
}

TextWithLinks.displayName = 'TextWithLinks';
TextWithLinks.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export default TextWithLinks;
