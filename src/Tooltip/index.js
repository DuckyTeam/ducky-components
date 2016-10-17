import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';
import RcTooltip from 'rc-tooltip';
import './tooltip.css';

function Tooltip(props) {
  const tooltipContent = (
    <span>
      <Wrapper
        className={classNames(styles.wrapper, {[props.className]: props.className})}
        size="narrow"
        >
        <Typography
          className={styles.content}
          type="caption2Normal"
          >
          {props.text}
        </Typography>
      </Wrapper>
    </span>
  );

  return (
    <RcTooltip
      mouseLeaveDelay={0}
      overlay={tooltipContent}
      overlayClassName={styles.popup}
      placement={props.placement || "top"}
      >
      <span>{props.children}</span>
    </RcTooltip>
  );
}

Tooltip.displayName = 'ToolTip';
Tooltip.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  placement: React.PropTypes.string,
  text: React.PropTypes.string
};

export default Tooltip;
