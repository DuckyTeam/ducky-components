import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Loader(props) {
    return (
        <div className={classNames(styles.wrapper, {
            [props.className]: props.className,
            [styles.hide]: props.hide
        })}>
            <div>
                <div className={classNames(styles.iconWrapper, {
                    [styles.hide]: props.hide
                })}>
                    <div className={styles.loader} />
                </div>
                <div className={styles.text}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

Loader.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    hide: React.PropTypes.bool
};

export default Loader;
