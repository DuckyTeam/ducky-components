import ProfileMenuItem from '../ProfileMenuItem';
import GoalComposit1 from '../GoalComposit1';
import Spacer from '../Spacer';
import GoalInfoNavigation from '../GoalInfoNavigation';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function ProfileSectionPersonalGoal(props) {
    let opt = <Spacer size={"double"} />;

    if (props.profileType === 'self') {
        opt = (<GoalComposit1 />);
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
        >
            <div className={styles.innerWrapper}>
                <ProfileMenuItem
                    numberGoals={props.numberGoals || 0}
                    profileType={props.profileType}
                    type={'PERSONAL'}
                />
              {
                props.numberGoals && props.numberGoals > 0
                ? props.children
                : opt
              }
              {
                props.numberGoals && props.numberGoals > 0
                ? <GoalInfoNavigation
                    currentSlide={props.currentSlide}
                    slideCount={props.slideCount}
                  />
              : <Spacer size={"double"} />
              }
            </div>
            <Spacer size={"double"} />
        </div>
    );
}

ProfileSectionPersonalGoal.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    currentSlide: PropTypes.number,
    numberGoals: PropTypes.number,
    profileType: PropTypes.oneOf(['self', 'others']),
    slideCount: PropTypes.number
};

export default ProfileSectionPersonalGoal;
