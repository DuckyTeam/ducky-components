import React from 'react';
import Typography from '../../Typography';
import Wrapper from '../../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
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

SectionHeaderGeneral.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string
};

export default SectionHeaderGeneral;
