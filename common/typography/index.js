import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Typography(props) {
    return (
        <span className={classNames(styles.wrapper, {
            [styles[props.type]]: props.type,
            [props.className]: props.className
        })}>
          {props.children}
        </span>
    );
}

Typography.propTypes = {
    type: React.PropTypes.oneOf([
        'caption1Normal',
        'caption1Strong',
        'caption2Normal',
        'caption2Strong',
        'bodyTextNormal',
        'bodyTextStrong',
        'bodyTextTitle',
        'ingressNormal',
        'ingressStrong',
        'ingressTitles',
        'header1',
        'display1',
        'display2',
        'display3'
    ]),
    className: React.PropTypes.string,
    children: React.PropTypes.any
};

export default Typography;
