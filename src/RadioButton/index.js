import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classNames from 'classnames';
import styles from './styles.css';
import Typography from '../Typography';

function RadioButton(props) {
    return (
        <div
            className={classNames(styles.default,
                {[styles.checked]: props.checked}, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            <Icon
                icon={props.checked ? "icon-radio_button_checked" : "icon-radio_button_unchecked"}
                size={"standard"}
            />
            {
              props.label
                  ? <Typography
                      className={styles.label}
                      type="bodyTextNormal"
                    >
                      {props.label}
                  </Typography>
                  : null
            }
        </div>
    );
}


RadioButton.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.node,
    onClick: PropTypes.func
};

export default RadioButton;
