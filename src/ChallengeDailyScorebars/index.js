import React from 'react';
import ProgressBarVertical from '../ProgressBarVertical';
import moment from 'moment';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeDailyScorebars(props) {
    const allDates = [];
    let dailyActivitiesCount = props.dailyActivitiesCount;
    const loggedDays = props.loggedDays || [];
    const startDate = moment(props.challengeStartDatetimeUTC).startOf('day').valueOf();
    const endDate = moment(props.challengeEndDatetimeUTC).startOf('day').valueOf();
    const todayDate = moment(props.currentDate).startOf('day').valueOf();

    for (let date = startDate; date <= endDate; date = moment(date).add(1, 'days').startOf('day').valueOf()) {
        allDates.push(moment(date).startOf('day').valueOf());
    }

    const renderElement = allDates.map((eachDate, key) => {
        dailyActivitiesCount = dailyActivitiesCount || {};
        const percent = ((dailyActivitiesCount[eachDate] || 0) / props.totalActivitiesCount) * 100;

        if (eachDate < todayDate) {
            return (
              props.householdChallenge && eachDate in loggedDays
                  ? <ProgressBarVertical
                      className={styles.eachElement}
                      key={key}
                      percent={percent}
                      type={'#b0bec5'}
                    />
                  : <ProgressBarVertical
                      className={styles.eachElement}
                      key={key}
                      percent={percent}
                      type={props.barType}
                    />
            );
        } else if (eachDate === todayDate) {
            return (
                <ProgressBarVertical
                    className={styles.eachElement}
                    key={key}
                    percent={percent}
                    type={'#004750'}
                />
            );
        }
        return (
            <ProgressBarVertical
                className={styles.eachElement}
                inactive
                key={key}
            />
          );
    });

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>

              {renderElement}

        </div>
    );
}

ChallengeDailyScorebars.propTypes = {
    barType: PropTypes.string,
    challengeEndDatetimeUTC: PropTypes.string,
    challengeStartDatetimeUTC: PropTypes.string,
    className: PropTypes.string,
    currentDate: PropTypes.string,
    dailyActivitiesCount: PropTypes.object,
    householdChallenge: PropTypes.bool,
    loggedDays: PropTypes.object,
    totalActivitiesCount: PropTypes.number
};

export default ChallengeDailyScorebars;
