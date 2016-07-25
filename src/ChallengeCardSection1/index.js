import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ChallengeMetaJoin from '../ChallengeMetaJoin';
import Spacer from '../Spacer';
// import classNames from 'classnames';
import styles from './styles.css';

class ChallengeCardSection1 extends React.Component {
    getJoinIndicator(joined) {
        if (joined === true) {
            return (
                <div>
                    <Spacer size={'double'} />
                    <ChallengeMetaJoin
                        endDate={this.props.endDate}
                        joined
                        startDate={this.props.startDate}
                    />
                    <Wrapper className={styles.wrapper}
                        size={'standard'}
                    >
                        {this.props.children}
                    </Wrapper>
                </div>
            );
        }
        return (
            <div>
                <Spacer size={'standard'} />
                <Wrapper size={'side-bottom'}>
                    <Typography className={styles.challengeDescription}
                        size={'caption2Normal'}
                    >
                        {this.props.challengeDescription}
                    </Typography>
                </Wrapper>
                <ChallengeMetaJoin
                    endDate={this.props.endDate}
                    startDate={this.props.startDate}
                />
            </div>
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
                        className={styles.participant}
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
                        className={styles.challengeName}
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
    challengeDescription: React.PropTypes.string,
    challengeName: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    endDate: React.PropTypes.string,
    joined: React.PropTypes.bool,
    participantText: React.PropTypes.string,
    startDate: React.PropTypes.string
};

export default ChallengeCardSection1;
