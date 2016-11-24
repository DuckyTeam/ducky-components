import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import LabelTitle from '../LabelTitle';
import Tooltip from '../Tooltip';
const PropTypes = React.PropTypes;

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
  className: React.PropTypes.string,
  decimals: PropTypes.number,
  icon: React.PropTypes.string,
  number: React.PropTypes.node,
  onClick: PropTypes.func,
  theme: React.PropTypes.string,
  tooltipText: React.PropTypes.node
};

export default LabelNumberDisplay2;
