import ActionButton from '../ActionButton';
import PopoverMenu from '../PopoverMenu';
import Popup from '../Popup';
import Spacer from '../Spacer';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalButtonPopOverMenuItem(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <ActionButton
                className={styles.actionButton}
                icon={'icon-dots-vertical'}
                onClick={props.onActivityClick}
                size={'standard'}
            />
            {
              props.show
                ? <Popup className={styles.popOverMenu}>
                    <Spacer size={'double'} />
                    <PopoverMenu
                        onClick={props.onClick}
                        text={'Slett dette målet'}
                    />
                    <Spacer size={'double'} />
                </Popup>
                : null
            }
        </div>
    );
}

GoalButtonPopOverMenuItem.propTypes = {
    className: React.PropTypes.string,
    onActivityClick: React.PropTypes.func,
    onClick: React.PropTypes.func,
    show: React.PropTypes.bool
};

export default GoalButtonPopOverMenuItem;
