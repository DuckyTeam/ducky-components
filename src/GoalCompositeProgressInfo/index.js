import GoalProgressBarGeneral from '../GoalProgressBarGeneral';
import GoalDescriptionGeneral from '../GoalDescriptionGeneral';
import Wrapper from '../Wrapper';
import React from 'react';
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
    className: React.PropTypes.string,
    content: React.PropTypes.string,
    endDate: React.PropTypes.string,
    finished: React.PropTypes.bool,
    goalPointsAmount: React.PropTypes.number,
    handleButtonClick: React.PropTypes.func,
    icon: React.PropTypes.string,
    numberDays: React.PropTypes.number,
    numberRegistration: React.PropTypes.number,
    percentage: React.PropTypes.number,
    savingsAmount: React.PropTypes.number,
    selectedActivityName: React.PropTypes.string,
    startDate: React.PropTypes.string,
    type: React.PropTypes.oneOf(['habit', 'points', 'activity', 'co2'])
};

export default GoalCompositeProgressInfo;
