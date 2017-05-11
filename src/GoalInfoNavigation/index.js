import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import IconAvaWrapper from '../IconAvaWrapper';
import styles from './styles.css';

function GoalInfoNavigation(props) {
    return (
        <Wrapper
            className={styles.outerWrapper}
            size={"short"}
        >
            <IconAvaWrapper
                className={props.currentSlide === 1 ? styles.iconInactive : styles.iconActive}
                icon={'icon-keyboard_arrow_left'}
                onClick={props.handleLeftClick}
            />
            <Typography
                className={styles.typo}
                type={"caption2Normal"}
            >
                {props.currentSlide}{" / "}{props.slideCount}
            </Typography>
            <IconAvaWrapper
                className={props.currentSlide === props.slideCount ? styles.iconInactive : styles.iconActive}
                icon={'icon-keyboard_arrow_right'}
                onClick={props.handleRightClick}
            />
        </Wrapper>
    );
}

GoalInfoNavigation.propTypes = {
    currentSlide: PropTypes.number,
    handleLeftClick: PropTypes.func,
    handleRightClick: PropTypes.func,
    slideCount: PropTypes.number
};

export default GoalInfoNavigation;
