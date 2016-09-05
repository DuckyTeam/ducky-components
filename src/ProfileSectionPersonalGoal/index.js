import ProfileMenuItem from '../ProfileMenuItem';
import GoalComposit1 from '../GoalComposit1';
import Spacer from '../Spacer';
import GoalInfoNavigation from '../GoalInfoNavigation';
import React from 'react';
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
    children: React.PropTypes.string,
    className: React.PropTypes.string,
    currentSlide: React.PropTypes.number,
    numberGoals: React.PropTypes.number,
    profileType: React.PropTypes.oneOf(['self', 'others']),
    slideCount: React.PropTypes.number
};

export default ProfileSectionPersonalGoal;
