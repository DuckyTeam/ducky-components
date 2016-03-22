import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './MenuItem.css';
const PropTypes = React.PropTypes;

function MenuItem(props) {
    return (
        <span onClick={props.onClick} >
            <Wrapper
                className={styles.wrapper}
                size={'side'}
            >
                <Icon
                    className={styles.icon}
                    icon={props.icon}
                    size={'standard'}
                />
                <Typography
                    className={styles.name}
                    type={'bodyTextNormal'}
                >
                    {props.name}
                </Typography>
            </Wrapper>
        </span>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func
};

export default MenuItem;
