import LabelSmall from '../LabelSmall';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';


function ChallengeCardLabel2(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={styles.labelText}
                type="caption2Normal"
            >
                {props.labelText}
            </Typography>

            <LabelSmall
                className={styles.memberCount}
                content={props.memberCount}
                icon={"icon-people"}
                type={"caption2Normal"}
            />
        </div>
    );
}

ChallengeCardLabel2.propTypes = {
    className: PropTypes.string,
    memberCount: PropTypes.number,
    labelText: PropTypes.string
};

export default ChallengeCardLabel2;
