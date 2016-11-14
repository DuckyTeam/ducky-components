import React from 'react';
import Icon from "../Icon";
import LabelStandard from "../LabelStandard";
import SnackBarWrapperMobile from "../SnackBarWrapperMobile";
import Typography from "../Typography";
import Wrapper from "../Wrapper";

import styles from './styles.css';

const PropTypes = React.PropTypes;

function SnackbarPanelTwoPointsCO2(props) {
  return (
    <SnackBarWrapperMobile show={props.show}>
      <Wrapper
        className={styles.outercontainer}
        size={'short'}
        >
        <Icon
          icon={'icon-duck'}
          size={'large1'}
          />
        <Typography className={styles.textContent} >
          {props.messageText}
        </Typography>
        {props.pointValue
          ? <LabelStandard
            animate
            className={styles.pointValueLabel}
            content={props.pointValue}
            icon={'icon-brightness_high'}
            />
        : null}
        {props.savingValue
          ? <LabelStandard
            animate
            className={styles.savingValueLabel}
            content={props.savingValue}
            icon={'icon-leaf'}
            />
        : null}
      </Wrapper>
    </SnackBarWrapperMobile>
  );
}

SnackbarPanelTwoPointsCO2.displayName = 'SnackbarPanelTwoPointsCO2';

SnackbarPanelTwoPointsCO2.propTypes = {
  messageText: PropTypes.string,
  pointValue: PropTypes.number,
  savingValue: PropTypes.number,
  show: PropTypes.bool
};

export default SnackbarPanelTwoPointsCO2;
