import React from 'react';
import LabelStandard from '../LabelStandard';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import moment from 'moment';
const PropTypes = React.PropTypes;

function ChallengeDailyScoreInfo(props) {
    let challengeCaption = '';
    let displayedDate = '';

    if (props.challengeType === 'household') {
        challengeCaption = 'Din husholdning';
    } else {
        challengeCaption = 'Dine acktiviteter';
    }

    if (moment(props.challengeEndDatetimeUTC).isAfter(props.currentDate)) {
        displayedDate = moment(props.currentDate).format('dddd Do MMM');
    } else {
        displayedDate = moment(props.challengeEndDatetimeUTC).format('dddd Do MMM');
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.dateWrapper}>
                <Typography
                    className={classNames(styles.currentDate,
                        {[styles.inactiveCurrentDate]: moment(props.challengeStartDatetimeUTC).isAfter(props.currentDate)}
                      )}
                    type={'bodyTextStrong'}
                >
                  {displayedDate}
                </Typography>
                <Typography
                    className={classNames(styles.challengeCaption,
                        {[styles.inactiveChallengeCaption]: moment(props.challengeStartDatetimeUTC).isAfter(props.currentDate)}
                      )}
                    type={'caption2Normal'}
                >
                  {challengeCaption}
                </Typography>
            </div>
            <LabelStandard
                className={classNames(styles.loggedActivities,
                  {[styles.inactiveLoggedActivities]: moment(props.challengeStartDatetimeUTC).isAfter(props.currentDate)}
                )}
                content={props.activities}
                icon={'icon-check_circle'}
            />
                {props.points
              ? <LabelStandard
                  className={classNames(styles.loggedPoints,
              {[styles.inactiveLoggedPoints]: moment(props.challengeStartDatetimeUTC).isAfter(props.currentDate)}
            )}
                  content={props.points}
                  icon={'icon-brightness_high'}
                />
              : <LabelStandard
                  className={classNames(styles.loggedCo2,
              {[styles.inactiveLoggedCo2]: moment(props.challengeStartDatetimeUTC).isAfter(props.currentDate)}
            )}
                  content={props.co2}
                  icon={'icon-leaf'}
                />
            }
        </div>
  );
}

ChallengeDailyScoreInfo.propTypes = {
    activities: PropTypes.string,
    challengeEndDatetimeUTC: PropTypes.string,
    challengeStartDatetimeUTC: PropTypes.string,
    challengeType: PropTypes.string,
    className: PropTypes.string,
    co2: PropTypes.string,
    currentDate: PropTypes.string,
    points: PropTypes.string
};

export default ChallengeDailyScoreInfo;
