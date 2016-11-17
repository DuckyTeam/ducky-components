import Icon from '../Icon';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function EmailTag(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className,
        [styles.wrapperInvalid]: props.invalid
      })}
      size="slim"
      >
      <Typography
        className={classNames(styles.text, {
          [styles.textInvalid]: props.invalid
        })}
        type="bodyTextNormal"
        >
        {props.children}
      </Typography>
      <Icon
        className={classNames(styles.icon, {
          [styles.iconInvalid]: props.invalid
        })}
        icon="icon-close"
        onClick={props.onClick}
        />
    </Wrapper>
  );
}

EmailTag.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  invalid: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

export default EmailTag;
