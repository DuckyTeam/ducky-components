import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderTitle(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            size={"standard"}
        >
            <Typography
                className={styles.title}
                type="bodyTextNormal"
            >
                {props.title}
            </Typography>
            {props.children ? <div className={styles.children}>{props.children}</div> : null}
        </Wrapper>
    );
}

SectionHeaderTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
};

export default SectionHeaderTitle;
