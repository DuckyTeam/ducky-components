import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import LabelTitle from '../LabelTitle';
import Tooltip from '../Tooltip';


function LabelNumberDisplay2(props) {
  return (
    <Tooltip
      placement="top"
      text={props.tooltipText}
      >
      <div
        className={classNames({[props.className]: props.className})}
        onClick={props.onClick}
        >
        <div className={styles.wrapper}>
          <LabelTitle
            animation={props.animation}
            className={classNames(styles.labelTitle, {[styles.darkThemeNumber]: props.theme === 'dark'})}
            decimals={props.decimals}
            icon={props.icon}
            number={props.number}
            size="small"
            />
        </div>
        <Typography
          className={classNames(styles.text, {[styles.darkThemeText]: props.theme === 'dark'})}
          type="caption2Normal"
          >
          {props.caption}
        </Typography>
      </div>
    </Tooltip>
  );
}

LabelNumberDisplay2.propTypes = {
  animation: PropTypes.bool,
  caption: PropTypes.string,
  className: PropTypes.string,
  decimals: PropTypes.number,
  icon: PropTypes.string,
  number: PropTypes.node,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  tooltipText: PropTypes.node
};

export default LabelNumberDisplay2;
