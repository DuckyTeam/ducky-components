import Avatar from '../Avatar';
import Icon from '../Icon';
import React from 'react';
import Wrapper from '../Wrapper';
import styles from './IconAvaWrapper.css';
const PropTypes = React.PropTypes;

function IconAvaWrapper(props) {
    if (props.user) {
        return (
            <Wrapper
                className={styles.wrapper}
                content={
                    <Avatar
                        link={'/'}
                        size={'small'}
                        user={props.user}
                    />
                }
                size={'narrow'}
            />
        );
    }

    return (
        <Wrapper
            className={styles.wrapper}
            content={
                <Icon
                    icon={props.icon}
                    onClick={props.onClick}
                    size={'standard'}
                />
            }
            size={'narrow'}
        />
    );
}

IconAvaWrapper.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    user: PropTypes.string
};

export default IconAvaWrapper;
