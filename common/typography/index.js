import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Typography(props) {
    return (
        <span
            className={classNames(styles.wrapper, {
                [styles[props.type]]: props.type,
                [props.className]: props.className
            })}
        >
          {props.children}
        </span>
    );
}

Typography.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
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
    ])
};

export default Typography;
