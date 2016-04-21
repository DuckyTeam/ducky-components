import Icon from '../Icon';
import React from 'react';
import Wrapper from '../Wrapper';
import styles from './MenuHeader.css';
const PropTypes = React.PropTypes;

function MenuHeader(props) {
    return (
        <div onClick={props.onClick} >
            <Wrapper
                className={styles.wrapper}
                size={'side'}
            >
                <Icon
                    className={styles.icon1}
                    icon={props.icon1}
                    size={'standard'}
                />
                <Icon
                    className={styles.icon2}
                    icon={props.icon2}
                    size={'standard'}
                />
            </Wrapper>
        </div>
    );
}

MenuHeader.propTypes = {
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    onClick: PropTypes.func
};

export default MenuHeader;
