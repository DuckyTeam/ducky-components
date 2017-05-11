import GoalButtonBig from '../GoalButtonBig';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function GoalComposit1(props) {
    let typoContent = '';

    if (props.finishedGoal) {
        typoContent = (
            <div>
                <br />
                <Typography
                    className={styles.typoFinishedGoal}
                    onClick={props.handleTypoClick}
                    type={'caption2Normal'}
                >
                    {'Vis tidligere mål'}
                </Typography>
            </div>
        );
    }
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
            <div className={styles.innerWrapper}>
                <Typography
                    className={styles.typoCreateGoal}
                    type={'caption2Normal'}
                >
                    {'Bygg en vane eller fullfør prestasjoner iløpet av en fastsatt periode.'}
                </Typography>
                {typoContent}
            </div>
        </Wrapper>
    );
}

GoalComposit1.propTypes = {
    className: PropTypes.string,
    finishedGoal: PropTypes.bool,
    handleTypoClick: PropTypes.func,
    onClick: PropTypes.func
};

export default GoalComposit1;
