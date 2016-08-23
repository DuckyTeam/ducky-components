import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import ActionButton from '../ActionButton';

function RemoveImage(props) {
    const style = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: `${props.height}px`
    };

    return (
        <Wrapper
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            size="standard"
            style={style}
        >
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
    height: PropTypes.number.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func
};

export default RemoveImage;
