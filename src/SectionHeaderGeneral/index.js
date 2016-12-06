import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
  let withTypo = (
    <Typography
      className={styles.text}
      type="ingressStrong"
      >
      {props.title}
    </Typography>
);

  let withIcon = (
    <div>
      <IconAvaWrapper
        onClick={props.onClick}
        icon={props.rightIcon}
        size={"standard"}
        />
    </div>
);

  if (props.headerOpt === 'title') {
    withIcon = null;
  }
  if (props.headerOpt === 'icon') {
    withTypo = null;
  }
  return (
    <div className={styles.outerWrapper}>
      <Wrapper
        className={classNames(styles.wrapper, {
          [props.className]: props.className
        })}
        size={"short"}
        >
      {withTypo}
      </Wrapper>
      <div className={styles.iconWrapper}>
        {withIcon}
      </div>
    </div>
    );
}

SectionHeaderGeneral.propTypes = {
  className: React.PropTypes.string,
  headerOpt: React.PropTypes.string,
  onClick: React.PropTypes.func,
  rightIcon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default SectionHeaderGeneral;
