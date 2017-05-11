import LabelSmall from '../LabelSmall';
import React from 'react';
import PropTypes from 'prop-types';
import Time from '../TimeStamp';
import styles from './styles.css';


function LabelPair(props) {
  if (props.co2 && props.time) {
    return (
      <span>
        <Time
          dateTime={props.time}
          onlyDays={props.onlyDays}
          short={Boolean(true)}
          />
        <span className={styles.pad}>
          <LabelSmall
            content={props.co2}
            icon={'icon-leaf'}
            onClick={props.onClick}
            typographyType={"caption2Strong"}
            />
        </span>
      </span>
    );
  }

  if (props.co2) {
    return (
      <span>
        {/*<LabelSmall
          content={props.points}
          icon={'icon-brightness_high'}
          onClick={props.onClick}
          typographyType={"caption2Strong"}
          />*/}
        <span /*className={styles.pad}*/>
          <LabelSmall
            content={props.co2}
            icon={'icon-leaf'}
            onClick={props.onClick}
            typographyType={"caption2Strong"}
            />
        </span>
      </span>
    );
  }

  if (props.time) {
    return (
      <span>
        <Time
          dateTime={props.time}
          onlyDays={props.onlyDays}
          short={Boolean(true)}
          />
        {/*<span className={styles.pad}>
          <LabelSmall
            content={props.points}
            icon={'icon-brightness_high'}
            onClick={props.onClick}
            typographyType={"caption2Strong"}
            />
        </span>*/}
      </span>
    );
  }

  return (
    <span>
      <LabelSmall
        content={props.points}
        icon={'icon-brightness_high'}
        onClick={props.onClick}
        typographyType={"caption2Strong"}
        />
    </span>
  );
}

LabelPair.displayName = 'LabelPair';
LabelPair.propTypes = {
  co2: PropTypes.node,
  onClick: PropTypes.func,
  onlyDays: PropTypes.bool,
  points: PropTypes.number,
  time: PropTypes.number
};
export default LabelPair;
