import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function ToolTip(props) {
    return (
        <span>
            <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
                size={'narrow'}
            >
                <Typography className={classNames(styles.content)}
                    type={'caption2Normal'}
                >
                    {props.children}
                </Typography>
            </Wrapper>
        </span>
  );
}

ToolTip.displayName = 'ToolTip';
ToolTip.propTypes = {
    children: React.PropTypes.string,
    className: React.PropTypes.string
};

export default ToolTip;
