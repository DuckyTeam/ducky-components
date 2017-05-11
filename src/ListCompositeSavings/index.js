import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import LabelHorisontal from '../LabelHorisontal';
import classNames from 'classnames';
import styles from './styles.css';


function ListCompositeSavings(props) {
  let icon = 'icon-leaf';
  let text = props.savingsText;

  if (props.type === 'points') {
    icon = 'icon-brightness_high';
    text = props.pointsText;
  }

  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <div className={styles.label}>
        <LabelHorisontal
          className={classNames(
            {[styles.pointsIcon]: text === props.pointsText},
            {[styles.co2Icon]: text === props.savingsText}
          )}
          icon={icon}
          text={text}
          />
      </div>
      <div className={styles.savings}>
        <Typography type="ingressStrong">
          {props.savings}
        </Typography>
      </div>
    </div>
  );
}

ListCompositeSavings.propTypes = {
  className: PropTypes.string,
  pointsText: PropTypes.string,
  savings: PropTypes.number,
  savingsText: PropTypes.string,
  type: PropTypes.oneOf(['points'])
};

export default ListCompositeSavings;
