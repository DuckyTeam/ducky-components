import GoalProgressBarGeneral from '../GoalProgressBarGeneral';
import GoalDescriptionGeneral from '../GoalDescriptionGeneral';
import Wrapper from '../Wrapper';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function GoalCompositeProgressInfo(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={"standard"}
        >

            <GoalProgressBarGeneral
                content={props.content}
                icon={props.icon}
                percentage={props.percentage}
                type={props.type}
            />
            <div className={styles.innerWrapper}>
                <GoalDescriptionGeneral
                    endDate={props.endDate}
                    finished={props.finished}
                    goalPointsAmount={props.goalPointsAmount}
                    numberDays={props.numberDays}
                    numberRegistration={props.numberRegistration}
                    savingsAmount={props.savingsAmount}
                    selectedActivityName={props.selectedActivityName}
                    startDate={props.startDate}
                    type={props.type}
                />
            </div>
        </Wrapper>
    );
}

GoalCompositeProgressInfo.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string,
    endDate: PropTypes.string,
    finished: PropTypes.bool,
    goalPointsAmount: PropTypes.number,
    handleButtonClick: PropTypes.func,
    icon: PropTypes.string,
    numberDays: PropTypes.number,
    numberRegistration: PropTypes.number,
    percentage: PropTypes.number,
    savingsAmount: PropTypes.number,
    selectedActivityName: PropTypes.string,
    startDate: PropTypes.string,
    type: PropTypes.oneOf(['habit', 'points', 'activity', 'co2'])
};

export default GoalCompositeProgressInfo;
