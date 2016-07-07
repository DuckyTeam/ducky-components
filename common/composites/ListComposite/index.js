import Icon from '../../Icon';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ListComposite(props) {
    const title = (
        props.challenge ? props.challengeName : 'Hashtag'
    );

    const supplementInfo = (
        props.challenge ? ' deltagere' : ' poster'
    );

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.challenge ? 'icon-trophy' : 'icon-local_offer'}
                size={"standard"}
            />
            <div className={styles.composite}>
                <Typography className={styles.typo}
                    type="bodyTextTitle"
                >
                    {title}
                </Typography>
                <Typography className={styles.typo}
                    type="caption2Normal"
                >
                    {props.info} {supplementInfo}
                </Typography>
            </div>
        </div>
    );
}

ListComposite.propTypes = {
    challenge: PropTypes.bool,
    challengeName: PropTypes.string,
    className: PropTypes.string,
    info: PropTypes.number
};

export default ListComposite;
