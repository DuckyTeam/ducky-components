import React from 'react';
import classNames from 'classnames';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import GoalMenuItem from '../GoalMenuItem';
import Modal from '../Modal';
import Spacer from '../Spacer';
import styles from './styles.css';
import SectionFooterNew from '../SectionFooterNew';
const PropTypes = React.PropTypes;

function CreateGoalPanel1Desktop(props) {
  return (
    <Modal
      className={classNames(styles.outerwrapper, {[props.className]: props.className})}
      show={props.show}
      >
      <div className={styles.outerWrapper}>
        <SectionHeaderGeneral
          children={props.children}
          rightIcon={"icon-close"}
          title={props.title}
          />
        <Spacer
          size={"standard"}
          />
        <GoalMenuItem
          inactive={props.inactive}
          onClick={props.onClick}
          type={"co2"}
          />
        <Spacer
          className={styles.hr2}
          hr={"true"}
          size={"hr2"}
          />
        <GoalMenuItem
          inactive={props.inactive}
          onClick={props.onClick}
          type={'points'}
          />
        <Spacer
          className={styles.hr2}
          hr={"true"}
          size={"hr2"}
          />
        <GoalMenuItem
          inactive={props.inactive}
          onClick={props.onClick}
          type={'activity'}
          />
        <Spacer
          className={styles.hr2}
          hr={"true"}
          size={"hr2"}
          />
        <GoalMenuItem
          inactive={props.inactive}
          onClick={props.onClick}
          type={'habit'}
          />
        <Spacer
          hr={"true"}
          size={'double'}
          />
        <SectionFooterNew
          className={styles.footer}
          text={props.text}
          type={'SEF005'}
          />
      </div>
    </Modal>
  );
}

CreateGoalPanel1Desktop.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  onClick: PropTypes.func,
  rightIcon: PropTypes.string,
  show: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};
export default CreateGoalPanel1Desktop;
