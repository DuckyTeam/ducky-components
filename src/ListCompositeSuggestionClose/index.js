import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';


function ListCompositeSugClose(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.composite}>
                {props.children}
            </div>
            <Icon
                className={styles.icon}
                icon={'icon-cancel'}
                onClick={props.onCloseClick}
                size={"standard"}
            />
        </div>
    );
}

ListCompositeSugClose.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    onCloseClick: PropTypes.func
};

export default ListCompositeSugClose;
