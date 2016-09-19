import React from 'react';
import ProgressBarVertical from '../ProgressBarVertical';
import moment from 'moment';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeDailyScorebars(props) {
    const allDates = [];
    const dailyActivitiesCount = props.dailyActivitiesCount;
    const loggedDays = props.loggedDays || [];
    const startDate = moment(props.challengeStartDate).startOf('day').valueOf();
    const endDate = moment(props.challengeEndDate).startOf('day').valueOf();
    const todayDate = moment(props.todayDate).startOf('day').valueOf();

    for (let date = startDate; date <= endDate; date = moment(date).add(1, 'days').startOf('day').valueOf()) {
        allDates.push(moment(date).startOf('day').valueOf());
    }

    const renderElement = allDates.map((eachDate, key) => {
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
    challengeEndDate: PropTypes.string,
    challengeStartDate: PropTypes.string,
    className: PropTypes.string,
    dailyActivitiesCount: PropTypes.object,
    householdChallenge: PropTypes.bool,
    loggedDays: PropTypes.object,
    todayDate: PropTypes.string,
    totalActivitiesCount: PropTypes.number
};

export default ChallengeDailyScorebars;
