import React from 'react';
import styles from './styles.css';

function ImageOnlyElement(props) {
    return (
        <div
          className={styles.wrapper}
          style={{
              backgroundImage: 'url(' + props.url + ')',
              width: props.width,
              height: props.height
          }}
          >
        </div>
    );
}

ImageOnlyElement.propTypes = {
    url: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
};

export default ImageOnlyElement;
