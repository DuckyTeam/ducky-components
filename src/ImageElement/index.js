import React from 'react';
import {PropTypes} from 'react';

function ImageElement(props) {
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: props.backgroundSize,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: props.width,
    height: props.height
  };

  return (
    <div className={props.className}>
      <div
        onClick={props.onClick}
        style={style}
        />
    </div>
  );
}

ImageElement.propTypes = {
  backgroundSize: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string.isRequired
};

export default ImageElement;
