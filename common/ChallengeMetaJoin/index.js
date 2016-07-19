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
        if (joined === false) {
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
    endDate: React.PropTypes.string,
    joined: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    startDate: React.PropTypes.string
};

export default ChallengeMetaJoin;
