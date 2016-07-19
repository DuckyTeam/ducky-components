import LabelTitle from '../LabelTitle';
import Spacer from '../Spacer';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeOverviewHeader2(props) {
    const text = ([
        "Utfordringer er en fin måte å forplikte deg selv" +
        "og samtidig inspirere andre til innsats. Se resultatet av ditt bidrag," +
        "og vinn premier og utmerkelser i samme slengen."]);

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <LabelTitle
                className={styles.label}
                icon="icon-trophy"
                size="small"
                text="Utfordringer"
            />
            <Spacer size={'double'} />
            <Typography
                className={styles.text}
                type="bodyTextNormal"
            >
                {text}
            </Typography>
        </div>
    );
}

ChallengeOverviewHeader2.propTypes = {
    className: PropTypes.string
};

export default ChallengeOverviewHeader2;
