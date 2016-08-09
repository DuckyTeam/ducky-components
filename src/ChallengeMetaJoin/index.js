import React from 'react';
import LabelSmall from '../LabelSmall';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ButtonRaised from '../ButtonRaised';
import classNames from 'classnames';
import styles from './styles.css';
import moment from 'moment';

moment.locale('nb', {
    calendar: {
        lastDay: "D. MMM",
        sameDay: "D. MMM",
        nextDay: "D. MMM",
        lastWeek: "D. MMM",
        nextWeek: "D. MMM",
        sameElse: "D. MMM"
    }
});

class ChallengeMetaJoin extends React.Component {

    getJoinedIndicatorInfo(joined) {
        if (joined === true) {
            let daysRemainingToEnd = moment(this.props.endDate)
                                        .diff(moment(Date.now()), 'days') + 1;
            let daysRemainingToStart = moment(this.props.startDate)
                                        .diff(moment(Date.now()), 'days') + 1;

            if (moment(Date.now()) > moment(this.props.startDate) && daysRemainingToEnd <= 7) {
                return (
                    <Typography
                        className={styles.text}
                        type={'caption2Normal'}
                    >
                        {'Slutter om '}{daysRemainingToEnd}{' dager'}
                    </Typography>
                );
            } else if
                (moment(Date.now()) < moment(this.props.startDate) && daysRemainingToStart <= 7) {
                return (
                    <Typography
                        className={styles.text}
                        type={'caption2Normal'}
                    >
                        {'Starter om '}{daysRemainingToStart}{' dager'}
                    </Typography>
                );
            }
            return (
                <Typography
                    className={styles.text}
                    type={'caption2Normal'}
                >
                    {`${moment(this.props.startDate).calendar()}
                    - ${moment(this.props.endDate).calendar()}`}
                </Typography>
            );
        }
        return (
            <Typography
                className={styles.text}
                type={'caption2Normal'}
            >
                {`${moment(this.props.startDate).calendar()}
                - ${moment(this.props.endDate).calendar()}`}
            </Typography>
        );
    }
    getJoinIndicator(joined) {
        if (joined === true) {
            return (
                <LabelSmall
                    className={styles.label}
                    content={'Deltar'}
                    icon={'icon-check'}
                    type={"caption2Normal"}
                />
            );
        }
        return (
            <ButtonRaised
                className={styles.button}
                onClick={this.props.onClick}
            >
                {'Delta'}
            </ButtonRaised>
        );
    }
    render() {
        return (
            <div>
                <Wrapper
                    className={classNames(styles.wrapper, {
                        [this.props.className]: this.props.className
                    })}
                    size={'side-bottom'}
                >
                    {this.getJoinedIndicatorInfo(this.props.joined)}
                    <div>
                        {this.getJoinIndicator(this.props.joined)}
                    </div>
                </Wrapper>
            </div>
        );
    }
}

ChallengeMetaJoin.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    endDate: React.PropTypes.number,
    joined: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    startDate: React.PropTypes.number
};

export default ChallengeMetaJoin;
