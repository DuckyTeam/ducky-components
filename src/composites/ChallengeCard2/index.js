import CardSection2 from '../ChallengeCardSection2';
import Wrapper from '../../Wrapper';
import React from 'react';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeCard2(props) {
    let opt = '';

    if (props.userParticipate) {
        opt = (
            <CardSection2
                cardLabelType={props.cardLabelType}
                labelContent={props.cardLabelContent}
                percentValue={props.percentValue}
                points={props.points}
                progPercent={props.progPercent}
                textOne={props.titleText}
                userParticipate
                userText={props.date}
            />
    );
    } else {
        opt = (
            <CardSection2
                labelContent={props.cardLabelContent}
                textOne={props.titleText}
                textTwo={props.bodyText}
                userText={props.date}
            />
    );
    }

    return (
        <Wrapper className={styles.wrapper}
            size={'slim'}
        >
            <div className={styles.image}>
                <img src={props.image} />
            </div>
            <div className={styles.section}>
                {opt}
            </div>
        </Wrapper>
        );
}


ChallengeCard2.propTypes = {
    bodyText: PropTypes.string,
    cardLabelContent: PropTypes.string,
    cardLabelType: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.string,
    percentValue: PropTypes.number,
    points: PropTypes.number,
    progPercent: PropTypes.number,
    titleText: PropTypes.string,
    userParticipate: PropTypes.bool
};
export default ChallengeCard2;
