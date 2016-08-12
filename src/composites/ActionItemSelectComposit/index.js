import ListCompositeActivity from '../ListCompositeActivity';
import ActionButton from '../../ActionButton';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ActionItemSelectComposit(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.compositeWrapper}>
                <ListCompositeActivity
                    co2={props.co2}
                    icon={props.icon}
                    points={props.points}
                    title={props.title}
                />
            </div>
            <div>
                <ActionButton
                    className={styles.buttonIcon}
                    icon={'icon-keyboard_arrow_right'}
                    onClick={props.onClick}
                    size={'standard'}
                />
            </div>
        </div>
    );
}

ActionItemSelectComposit.propTypes = {
    className: PropTypes.string,
    co2: PropTypes.number,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    points: PropTypes.number,
    title: PropTypes.string
};

export default ActionItemSelectComposit;
