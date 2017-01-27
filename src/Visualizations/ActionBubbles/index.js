import React from 'react';
import visualization from './visualization';
import Visualization from './../index';

function ActionBubbles(props) {
  return (
    <Visualization
      className={props.className}
      viz={visualization}
      {...props}
      />
  );
}

export default ActionBubbles;
