import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import PropTypes from 'prop-types';
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
          size={'standard'}
          />
        <Typography
          type="bodyTextNormal"
          >
          {props.title}
        </Typography>
      </Wrapper>
      <IconAvaWrapper icon={'icon-keyboard_arrow_down'} />
    </div>
    : <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}
      onClick={props.onClick}
      >
      <Wrapper
        className={styles.iconTextWrapper}
        size="short"
        >
        <Icon
          className={styles.inactive}
          icon={props.leftIcon}
          size={'standard'}
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
  className: PropTypes.string,
  expanded: PropTypes.bool,
  leftIcon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default AccordionItem;
