import Avatar from '../Avatar';
import Icon from '../Icon';
import React from 'react';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './IconAvaWrapper.css';
const PropTypes = React.PropTypes;

function IconAvaWrapper(props) {
    if (props.user) {
        return (
            <Wrapper
                className={classNames(styles.wrapper, {[styles.pointerCursor]: props.onClick, [props.className]: props.className})}
                onClick={props.onClick}
                size={'narrow'}
            >
                <Avatar
                    link={'/'}
                    size={'small'}
                    user={props.user}
                />
            </Wrapper>
        );
    }

    return (
        <Wrapper
            className={classNames(styles.wrapper, {[styles.pointerCursor]: props.onClick, [props.className]: props.className})}
            onClick={props.onClick}
            size={'narrow'}
        >
            <Icon
                icon={props.icon}
                size={'standard'}
            />
        </Wrapper>
    );
}

IconAvaWrapper.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    user: PropTypes.string
};

export default IconAvaWrapper;
