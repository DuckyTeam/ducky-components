import LabelTitle from '../LabelTitle';
import React from 'react';
import Spacer from '../Spacer';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ChallengeOverviewHeader1(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <LabelTitle
                className={styles.label}
                icon="icon-trophy"
                size="large"
                text={props.title}
            />
            <Spacer size={'double'} />
            <Typography
                className={styles.text}
                type="ingressNormal"
            >
                {props.text}
            </Typography>
        </div>
    );
}

ChallengeOverviewHeader1.propTypes = {
    className: PropTypes.string,
    labelContent: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default ChallengeOverviewHeader1;
