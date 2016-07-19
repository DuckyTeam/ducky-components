import LabelTitle from '../LabelTitle';
import React from 'react';
import Spacer from '../Spacer';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeOverviewHeader1(props) {
    const text = "Utfordringer er en fin måte å forplikte deg" +
                    "selv og samtidig inspirere andre til innsats. Se resultatet av ditt bidrag," +
                    " og vinn premier og utmerkelser i samme slengen.";

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <LabelTitle
                className={styles.label}
                icon="icon-trophy"
                size="large"
                text="Utfordringer"
            />
            <Spacer size={'double'} />
            <Typography
                className={styles.text}
                type="ingressNormal"
            >
                {text}
            </Typography>
        </div>
    );
}

ChallengeOverviewHeader1.propTypes = {
    className: PropTypes.string,
    labelContent: PropTypes.string,
    text: PropTypes.string
};

export default ChallengeOverviewHeader1;
