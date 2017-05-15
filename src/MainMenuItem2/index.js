import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './styles.css';
function MainMenuItem2(props) {
  return (
    <div className={styles.wrapper}>
      <Typography
        className={styles.caption}
        type={'bodyTextNormal'}
        >
        {props.caption}
      </Typography>
    </div>
   );
}

MainMenuItem2.displayName = "Main Menu Item 2";

MainMenuItem2.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string
};
export default MainMenuItem2;
