import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CalculatorGeneralItem(props) {
  return (
    props.expanded
    ? <div className={styles.outerWrapper}>
      <Wrapper className={classNames(styles.wrapperExpanded, {[props.className]: props.className})}
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
  : <div className={styles.outerWrapper}>
    <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  inactive: React.PropTypes.bool,
  label: React.PropTypes.string,
  noValue: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onCloseClick: React.PropTypes.func,
  onSaveButtonClicked: React.PropTypes.func,
  saveButtonText: React.PropTypes.string,
  units: React.PropTypes.string,
  value: React.PropTypes.string
};

export default CalculatorGeneralItem;
