import React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './ToolTip.css';

function ToolTip(props) {
    return (
        <span>
            <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
                size={'narrow'}
            >
                <Typography className={classNames(styles.content)}
                    type={'caption2Normal'}
                >
                    {props.content}
                </Typography>
            </Wrapper>
        </span>
  );
}

ToolTip.displayName = 'ToolTip';
ToolTip.propTypes = {
    className: React.PropTypes.string,
    content: React.PropTypes.string
};

export default ToolTip;
