import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CalculatorGeneralItem(props) {
  return (
    props.expanded
    ? <div className={classNames(styles.outerWrapper, props.className)}>
      <Wrapper className={styles.wrapperExpanded}
        onClick={props.onClick}
        size={'standard'}
        >
        <Typography
          className={props.inactive ? styles.typoContentInactive : styles.typoQuestion}
          type={'bodyTextNormal'}
          >
          {props.label}
        </Typography>
        <Icon
          className={styles.icon}
          icon={'icon-keyboard_arrow_up'}
          />
      </Wrapper>
      <div>
        {props.children}
      </div>
      <Spacer
        className={styles.spacerBottom}
        size="double"
        />
    </div>
  : <div className={classNames(styles.outerWrapper, props.className)}>
    <Wrapper className={styles.wrapper}
      onClick={props.onClick}
      size="standard"
      >
      <Typography
        className={props.inactive ? styles.typoContentInactive : styles.typoQuestion}
        type="bodyTextNormal"
        >
        {props.label}
      </Typography>
      {props.value
        ? <Typography
          className={props.inactive ? styles.typoContentInactive : styles.typoContent}
          size={'bodyTextStrong'}
          >
          {props.value}
          {props.units ? <span className={styles.unitsText}>{props.units}</span> : null}
        </Typography>
        : <Typography
          className={props.inactive ? styles.noValueInactive : styles.noValue}
          size={'bodyTextStrong'}
          >
          {props.noValue}
        </Typography>
    }
    </Wrapper>
  </div>
  );
}

CalculatorGeneralItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  noValue: PropTypes.string,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  saveButtonText: PropTypes.string,
  units: PropTypes.string,
  value: PropTypes.node
};

export default CalculatorGeneralItem;
