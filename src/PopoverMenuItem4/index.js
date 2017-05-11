import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';


function PopoverMenuItem4(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, {
        [props.className]: props.className,
        [styles.inactive]: props.inactive}
      )}
      onClick={props.onClick}
      size={'short'}
      >
      <Icon
        className={styles.icon}
        icon={props.icon}
        size={'small'}
        />
      <Typography
        className={styles.text}
        type="bodyTextNormal"
        >
        {props.label}
      </Typography>
    </Wrapper>
  );
}

PopoverMenuItem4.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default PopoverMenuItem4;
