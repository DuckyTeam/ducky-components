import React from 'react';
import PropTypes from 'prop-types';
import visualization from './visualization';
import Visualization from './../index';

function ActivityBubbles(props) {
  return (
    <Visualization
      className={props.className}
      viz={visualization}
      {...props}
      />
  );
}

export default ActivityBubbles;
