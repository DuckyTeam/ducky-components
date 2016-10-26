import React from 'react';
import classNames from 'classnames';
import CategoryButtons from '../CategoryButtons';
import CreateGoalActionItem from '../CreateGoalActionItem';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Spacer from '../Spacer';
import styles from './styles.css';
import SectionFooterNew from '../SectionFooterNew';
import Wrapper from '../Wrapper';
const PropTypes = React.PropTypes;

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
      <CreateGoalActionItem className={styles.actionItemComposite}
        co2={props.co2}
        icon={props.icon}
        onClick={props.onClickGoalActionItem}
        points={props.points}
        title={props.titleGoal1}
        />
      <Spacer
        className={styles.hr2}
        hr={"true"}
        size={"hr2"}
        />
      <CreateGoalActionItem className={styles.actionItemComposite}
        co2={props.co2}
        icon={props.icon}
        onClick={props.onClickGoalActionItem}
        points={props.points}
        title={props.titleGoal2}
        />
      <Spacer
        className={styles.hr2}
        hr={"true"}
        size={"hr2"}
        />
      <CreateGoalActionItem className={styles.actionItemComposite}
        co2={props.co2}
        icon={props.icon}
        onClick={props.onClickGoalActionItem}
        points={props.points}
        title={props.titleGoal3}
        />
      <Spacer
        hr={"true"}
        size={'double'}
        />
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
  activeCategory: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  co2: PropTypes.number,
  icon: PropTypes.string,
  iconSectionfooter: PropTypes.String,
  onCategoryClick: PropTypes.func,
  onClickGoalActionItem: PropTypes.func,
  points: PropTypes.number,
  rightIcon: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  titleGoal1: PropTypes.string,
  titleGoal2: PropTypes.string,
  titleGoal3: PropTypes.string,
  type: PropTypes.string
};
export default CreateGoalPanel4Mobile;
