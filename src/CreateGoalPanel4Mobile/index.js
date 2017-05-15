import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CategoryButtons from '../CategoryButtons';
import CreateGoalActionItem from '../CreateGoalActionItem';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Spacer from '../Spacer';
import styles from './styles.css';
import SectionFooterNew from '../SectionFooterNew';
import Wrapper from '../Wrapper';


function CreateGoalPanel4Mobile(props) {
  return (
    <div className={styles.outerWrapper}>
      <SectionHeaderGeneral
        children={props.children}
        className={styles.sectionHeaderGeneral}
        rightIcon={"icon-close"}
        title={props.title}
        />
      <Wrapper
        className={classNames(styles.wrapper, {
          [props.className]: props.className
        })}
        size={'standard'}
        >
        <CategoryButtons
          activeCategory={props.activeCategory}
          onCategoryClick={props.onCategoryClick}
          />
      </Wrapper>
      {
        (props.actions || []).filter((action) => {
          return action.type === props.activeCategory || !props.activeCategory;
        })
        .map((action, index) => {
          return (
            <div key={index}>
              <CreateGoalActionItem className={styles.actionItemComposite}
                co2={action.co2}
                icon={action.icon}
                onClick={props.onClickGoalActionItem}
                points={action.points}
                title={action.goalTitle}
                />
              <Spacer
                className={styles.hr2}
                hr={"true"}
                size={"hr2"}
                />
            </div>
          );
        })
      }
      <div className={styles.sectionHeaderGeneral}>
        <SectionFooterNew
          icon={props.iconSectionfooter}
          text={props.text}
          type={'SEF006'}
          />
      </div>
    </div>
);
}

CreateGoalPanel4Mobile.propTypes = {
  actions: PropTypes.array,
  activeCategory: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  co2: PropTypes.number,
  goalTitle: PropTypes.string,
  icon: PropTypes.string,
  iconSectionfooter: PropTypes.String,
  onCategoryClick: PropTypes.func,
  onClickGoalActionItem: PropTypes.func,
  points: PropTypes.number,
  rightIcon: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
};
export default CreateGoalPanel4Mobile;
