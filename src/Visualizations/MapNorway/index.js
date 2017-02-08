import React from 'react';
import map from './map';
import Visualization from './../index';

function MapNorway(props) {
  return (
    <Visualization
      className={props.className}
      viz={map}
      {...props}
      />
  );
}

export default MapNorway;
