import LabelPair from '../LabelPair';
import IconSVG from '../../IconSVG';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ListCompositeActivity(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <IconSVG
                className={styles.icon}
                icon={props.iconSVG}
                size={"standard"}
            />
            <div className={styles.composite}>
                <Typography className={styles.typo}
                    type="bodyTextTitle"
                >
                    {props.title}
                </Typography>
                <LabelPair
                    co2={props.co2}
                    onClick={props.onClick}
                    points={props.points}
                />
            </div>
        </div>
    );
}

ListCompositeActivity.propTypes = {
    className: PropTypes.string,
    co2: PropTypes.number,
    iconSVG: PropTypes.string,
    onClick: PropTypes.func,
    points: PropTypes.number,
    title: PropTypes.string
};

export default ListCompositeActivity;
