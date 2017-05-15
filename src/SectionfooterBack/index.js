import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from './../ButtonIcon';
import styles from './styles.css';
import classNames from 'classnames';

function SectionFooterBack(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className}
    )}>
      <ButtonIcon
        icon={'icon-keyboard_arrow_left'}
        onClick={props.onClick}
        >
        {props.backText}
      </ButtonIcon>
    </div>
  );
}

SectionFooterBack.displayName = "Section Footer Back";
SectionFooterBack.propTypes = {
  className: PropTypes.string,
  backText: PropTypes.string,
  onClick: PropTypes.func
};

export default SectionFooterBack;
