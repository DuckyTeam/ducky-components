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
      text={props.text}
      >
      <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
        <div>
          <LabelTitle
            className={styles.labelTitle}
            icon={props.icon}
            size="small"
            text={props.title}
            />
        </div>
        <Typography
          className={styles.text}
          type="caption2Normal"
          >
          {props.children}
        </Typography>
      </div>
    </Tooltip>
  );
}

LabelNumberDisplay2.propTypes = {
  children: PropTypes.node,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  text: React.PropTypes.node,
  title: React.PropTypes.node
};

export default LabelNumberDisplay2;
