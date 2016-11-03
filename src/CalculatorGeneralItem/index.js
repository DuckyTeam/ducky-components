import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CalculatorGeneralItem(props) {
  return (
    props.expanded
    ? <div>
      <Wrapper className={classNames(styles.wrapperExpanded, {[props.className]: props.className})}
        size={'standard'}
        >
        <Typography
          className={props.inactive ? styles.typoContentInactive : styles.typoQuestion}
          type={'bodyTextNormal'}
          >
          {props.label}
        </Typography>
        <Button
          className={styles.saveButton}
          onClick={props.onSaveButtonClicked}
          >
          {props.children}
        </Button>
      </Wrapper>
      <div>
        {props.children}
      </div>
      <Spacer
        className={styles.spacerBottom}
        size="double"
        />
    </div>
  : <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
    onClick={props.onClick}
    size="standard"
    >
    <Typography
      className={props.inactive ? styles.typoContentInactive : styles.typoQuestion}
      type="bodyTextNormal"
      >
      {props.label}
    </Typography>
    <Typography
      className={props.inactive ? styles.typoContentInactive : styles.typoAnswer}
      type="bodyTextStrong"
      >
      {props.value}
    </Typography>
  </Wrapper>
  );
}

CalculatorGeneralItem.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  inactive: React.PropTypes.bool,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onCloseClick: React.PropTypes.func,
  onSaveButtonClicked: React.PropTypes.func,
  value: React.PropTypes.string
};

export default CalculatorGeneralItem;
