import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import ActionButton from '../ActionButton';

function RemoveImage(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            size="standard"
        >
            <img
                className={styles.image}
                src={props.image}
            ></img>
            <ActionButton
                className={styles.button}
                icon="icon-close"
                onClick={props.onClick}
                size="standard"
            />
        </Wrapper>
    );
}

RemoveImage.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func
};

export default RemoveImage;
