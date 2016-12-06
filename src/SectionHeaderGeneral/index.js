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
        icon={props.icon}
        onClick={props.onClick}
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
  icon: React.PropTypes.string,
  iconTitle: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  title: React.PropTypes.string
};

export default SectionHeaderGeneral;
