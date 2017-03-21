import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

import LabelPair from '../LabelPair';
import Typography from '../Typography';
import Icon from '../Icon';

function TeamHeader(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
        <Icon
            className={styles.leftIcon}
            icon={"icon-team"}
            size={"large1"}
        />
        <div className={styles.content}>
            <Typography
                className={styles.title}
                type="bodyTextTitle"
            >
                {props.teamName}
            </Typography>
            <div className={styles.labelWrapper}>
                <LabelPair
                  time={props.time}
                />
            </div>
        </div>
        <Icon
          className={props.place === 1 ? styles.rightIconGold : styles.rightIcon}
          icon={props.place === 1 ? "icon-crown" : "icon-leaderboard"}
          size="standard"
        />
    </div>
  );
}

TeamHeader.propTypes = {
  className: PropTypes.string,
  teamName: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.number
};

export default TeamHeader;
