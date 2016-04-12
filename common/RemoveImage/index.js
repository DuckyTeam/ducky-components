import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

function RemoveImage(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            size="standard"
        >
            <img></img>
        </Wrapper>
    );
}

RemoveImage.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default RemoveImage;
