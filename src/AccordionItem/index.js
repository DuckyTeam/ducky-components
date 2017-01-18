import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import Icon from '../Icon';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function AccordionItem(props) {
  return (
    props.expanded
    ? <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}
      onClick={props.onClick}
      >
      <Wrapper
        className={styles.iconTextWrapper}
        size="short"
        >
        <Icon
          className={styles.active}
          icon={props.leftIcon}
          size={'regular'}
          />
        <Typography
          type="bodyTextNormal"
          >
          {props.title}
        </Typography>
      </Wrapper>
      <IconAvaWrapper
        icon={'icon-keyboard_arrow_down'}
        size={"standard"}
        />
    </div>
    : <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}
      onClick={props.onClick}>
      <Wrapper
        className={styles.iconTextWrapper}
        size="short"
        >
        <Icon
          className={styles.inactive}
          icon={props.leftIcon}
          size={'regular'}
          />
        <Typography
          type="bodyTextNormal"
          >
          {props.title}
        </Typography>
      </Wrapper>
      <IconAvaWrapper
        icon={'icon-keyboard_arrow_up'}
        size={"standard"}
        />
    </div>
  );
}

AccordionItem.propTypes = {
  className: React.PropTypes.string,
  expanded: React.PropTypes.bool,
  leftIcon: React.PropTypes.string,
  onClick: React.PropTypes.func,
  title: React.PropTypes.string
};

export default AccordionItem;
