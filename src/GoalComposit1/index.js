import GoalButtonBig from '../GoalButtonBig';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalComposit1(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={'standard'}
        >
            <div>
                <GoalButtonBig
                    onclick={props.onClick}
                />
            </div>
            <Typography
                className={styles.typo}
                type={'caption2Normal'}
            >
                {'Bygg en vane eller sett deg et innsparingsmål iløpet av en fastsatt periode.'}
            </Typography>
        </Wrapper>
    );
}

GoalComposit1.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default GoalComposit1;
