import Avatar from '../../Avatar';
import Icon from '../../Icon';
import React from 'react';
import Wrapper from '../../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function IconAvaWrapper(props) {
    if (props.avatar) {
        return (
            <Wrapper
                className={classNames(
                    styles.wrapper,
                    {[styles.pointerCursor]: props.onClick, [props.className]: props.className}
                )}
                onClick={props.onClick}
                size={'narrow'}
            >
                <Avatar
                    image={props.avatar}
                    link={'/'}
                    size={'small'}
                />
            </Wrapper>
        );
    }

    return (
        <Wrapper
            className={classNames(
                styles.wrapper,
                {[styles.pointerCursor]: props.onClick, [props.className]: props.className}
            )}
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
    avatar: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default IconAvaWrapper;
