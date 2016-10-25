import React from 'react';
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
        {"TILBAKE"}
      </ButtonIcon>
    </div>
  );
}

SectionFooterBack.displayName = "Section Footer Back";
SectionFooterBack.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default SectionFooterBack;
