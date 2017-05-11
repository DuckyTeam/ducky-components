import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
  return (
    <div className={styles.outerWrapper}>
      <Wrapper
        className={classNames(styles.wrapper, {
          [props.className]: props.className
        })}
        size={"short"}
        >
        <Typography
          className={styles.text}
          type="ingressStrong"
          >
          {props.title}
        </Typography>
      </Wrapper>
      <div className={styles.iconWrapper}>
        <div>
        {props.rightIcon
        ? <IconAvaWrapper
          icon={props.rightIcon}
          onClick={props.onClick}
          size={"standard"}
          />
        : null}
        </div>
      </div>
    </div>
    );
}

SectionHeaderGeneral.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  rightIcon: PropTypes.string,
  title: PropTypes.string
};

export default SectionHeaderGeneral;
