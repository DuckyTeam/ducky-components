import Icon from '../Icon';
import React from 'react';
import Wrapper from '../Wrapper';
import styles from './MenuHeader.css';
const PropTypes = React.PropTypes;

function MenuHeader(props) {
    return (
        <span onClick={props.onClick} >
            <Wrapper
                className={styles.wrapper}
                content={
                    <span>
                        <Icon
                            icon={props.icon1}
                            size={'standard'}
                        />
                        <Icon
                            icon={props.icon2}
                            size={'standard'}
                        />
                    </span>
                }
                size={'side'}
            />
        </span>
    );
}

MenuHeader.propTypes = {
    icon1: PropTypes.string,
    icon2: PropTypes.string,
    onClick: PropTypes.func
};

export default MenuHeader;
