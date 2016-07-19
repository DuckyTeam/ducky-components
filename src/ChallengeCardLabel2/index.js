import LabelSmall from '../LabelSmall';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function CardLabel2(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={styles.text}
                type="caption2Normal"
            >
                {props.text}
            </Typography>

            <LabelSmall
                className={styles.label}
                content={props.labelContent}
                icon={"icon-people"}
                type={"caption2Normal"}
            />
        </div>
    );
}

CardLabel2.propTypes = {
    className: PropTypes.string,
    labelContent: PropTypes.string,
    text: PropTypes.string
};

export default CardLabel2;
