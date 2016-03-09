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
            className={styles.wrapper}
            size={'narrow'}
        >
            <Icon
                icon={props.icon}
                onClick={props.onClick}
                size={'standard'}
            />
        </Wrapper>
    );
}

IconAvaWrapper.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    user: PropTypes.string
};

export default IconAvaWrapper;
