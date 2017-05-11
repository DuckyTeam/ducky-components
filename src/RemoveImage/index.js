import React from 'react';
import PropTypes from 'prop-types';

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
        width: props.width,
        height: props.height
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
    height: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string.isRequired
};

export default RemoveImage;
