import React from 'react';
import styles from './styles.css';
import SectionHeaderSubsection from '../SectionHeaderSubsection';
const propTypes = 'React.PropTypes';

function AccordionItem(props) {
  return (
    props.expanded
    ? <SectionHeaderSubsection
      className={styles.outerWrapperExpanded}
      leftIcon={props.icon}
      rightIcon={'icon-keyboard_arrow_up'}
      title={props.title}
      />
  : <SectionHeaderSubsection
    className={styles.outerWrapperExpanded}
    leftIcon={props.icon}
    rightIcon={'icon-keyboard_arrow_down'}
    title={props.title}
    />
  );
}

AccordionItem.propTypes = {
  children: propTypes.node,
  expanded: propTypes.bool,
  icon: propTypes.string,
  onClick: propTypes.func,
  title: propTypes.title
};

export default AccordionItem;
