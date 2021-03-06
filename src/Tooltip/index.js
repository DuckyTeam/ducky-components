import React from 'react';
import PropTypes from 'prop-types';
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
    <div>
      {props.text
        ? <RcTooltip
          destroyTooltipOnHide
          mouseLeaveDelay={0}
          overlay={tooltipContent}
          overlayClassName={styles.popup}
          placement={props.placement || "top"}
          >
          <div>{props.children}</div>
        </RcTooltip>
        : <div>{props.children}</div>}
    </div>
  );
}

Tooltip.displayName = 'ToolTip';
Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  text: PropTypes.string
};

export default Tooltip;
