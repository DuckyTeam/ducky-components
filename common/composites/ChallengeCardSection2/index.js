import CardLabel2 from '../../ChallengeCardLabel2';
import CardLabel1 from '../ChallengeCardLabel1';
import Typography from '../../Typography';
import Spacer from '../../Spacer';
import React from 'react';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeCardLabel1(props) {
    let optOne = '';
    let optTwo = '';
    const prefix = props.userParticipate ? 'Fullført ' : 'Sluttet ';
    let userText = prefix + props.userText;

    if (props.userParticipate) {
        optOne = (
            <CardLabel2
                labelContent={props.labelContent}
                text={userText}
            />
    );
        optTwo = (
            <div>
                <Spacer size={'double'} />
                <CardLabel1
                    goal
                    percentValue={props.percentValue}
                    points={props.points}
                    progPercent={props.progPercent}
                    type={props.cardLabelType}
                />
            </div>
    );
    } else {
        optOne = (
            <Typography className={styles.textTwo}
                type={'caption2Normal'}
            >
                {props.textTwo}
            </Typography>
        );
        optTwo = (
            <CardLabel2
                labelContent={props.labelContent}
                text={userText}
            />
    );
    }

    return (
        <div>
            <Typography
                className={props.userParticipate ? styles.textOnePart : styles.textOneNotPart}
                type={'bodyTextStrong'}
            >
                {props.textOne}
            </Typography>
            {optOne}
            {optTwo}
        </div>
        );
}


ChallengeCardLabel1.propTypes = {
    cardLabelType: PropTypes.string,
    labelContent: PropTypes.string,
    percentValue: PropTypes.number,
    points: PropTypes.number,
    progPercent: PropTypes.number,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    userParticipate: PropTypes.bool,
    userText: PropTypes.string
};
export default ChallengeCardLabel1;
