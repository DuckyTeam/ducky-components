import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ChallengeMetaJoin from '../ChallengeMetaJoin';
// import classNames from 'classnames';
import styles from './styles.css';

class ChallengeCardSection1 extends React.Component {
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
            <div className={this.props.className}>
                <Wrapper
                    className={styles.wrapper}
                    size={'side-bottom'}
                >
                    <Typography
                        className={styles.text}
                        type={'caption2Normal'}
                    >
                        {this.props.participantText}
                    </Typography>
                </Wrapper>
                <Wrapper
                    className={styles.wrapper}
                    size={'side'}
                >
                    <Typography
                        className={styles.text}
                        type={'ingressStrong'}
                    >
                        {this.props.challengeName}
                    </Typography>
                </Wrapper>
                <div>
                    {this.getJoinIndicator(this.props.joined)}
                </div>
            </div>
        );
    }
}

ChallengeCardSection1.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    endDate: React.PropTypes.string,
    joined: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    startDate: React.PropTypes.string
};

export default ChallengeMetaJoin;
