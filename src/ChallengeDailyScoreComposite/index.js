import React from 'react';
import ChallengeDailyScoreInfo from '../ChallengeDailyScoreInfo';
import Wrapper from '../Wrapper';
import ChallengeDailyScorebars from '../ChallengeDailyScorebars';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeDailyScoreComposite(props) {
    return (
        <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
            size={'standard'}
        >
            <ChallengeDailyScoreInfo
                activities={props.activitiesLoggedCurrentDate}
                challengeEndDatetimeUTC={props.challengeEndDatetimeUTC}
                challengeStartDatetimeUTC={props.challengeStartDatetimeUTC}
                challengeType={props.challengeType}
                co2={props.co2}
                currentDate={props.currentDate}
                points={props.points ? props.points : 0}
            />
            <ChallengeDailyScorebars
                barType={props.barType}
                challengeEndDatetimeUTC={props.challengeEndDatetimeUTC}
                challengeStartDatetimeUTC={props.challengeStartDatetimeUTC}
                currentDate={props.currentDate}
                dailyActivitiesCount={props.dailyActivitiesCount}
                householdChallenge={props.householdChallenge}
                loggedDays={props.loggedDays}
                totalActivitiesCount={props.totalActivitiesCount}
            />
        </Wrapper>
    );
}

ChallengeDailyScoreComposite.propTypes = {
    activitiesLoggedCurrentDate: PropTypes.number,
    barType: PropTypes.string,
    challengeEndDatetimeUTC: PropTypes.string,
    challengeStartDatetimeUTC: PropTypes.string,
    challengeType: PropTypes.string,
    className: PropTypes.string,
    co2: PropTypes.number,
    currentDate: PropTypes.string,
    dailyActivitiesCount: PropTypes.object,
    householdChallenge: PropTypes.bool,
    loggedDays: PropTypes.object,
    points: PropTypes.string,
    totalActivitiesCount: PropTypes.totalActivitiesCount
};

export default ChallengeDailyScoreComposite;
