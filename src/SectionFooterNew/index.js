import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import classNames from 'classnames';
import ButtonIcon from '../ButtonIcon';
import Button from '../Button';
import ButtonRaised from '../ButtonRaised';


function SectionFooterNew(props) {
  let optbt = '';

  if (props.type === 'SEF006') {
    optbt = (
      <ButtonIcon icon={props.icon}>
      {props.text}
      </ButtonIcon>
    );
  }

  if (props.type === 'SEF005') {
    optbt = (
      <Button>{props.text}</Button>
    );
  }
  if (props.type === 'SEF007') {
    optbt = (
      <div className={classNames(styles.wrapper, props.className)}>
        <ButtonIcon
          icon={props.icon}
          onClick={props.onPreviousClick}
          >
          {props.text}
        </ButtonIcon>
        <ButtonRaised
          className={styles.sef007NextButton}
          disabled={props.disabled}
          onClick={props.onNextClick}
          theme={'dark'}
          >
        {props.buttonText}
        </ButtonRaised>
      </div>
      );
  }
  if (props.type === 'SEF008') {
    optbt = (
      <div className={classNames(styles.wrapper, props.className)}>
        <Button>
         {props.text}
        </Button>
        <ButtonRaised>
        {props.buttonText}
        </ButtonRaised>
      </div>
       );
  }

  return (
    <div>
      {optbt}
    </div>

  );
}

SectionFooterNew.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dateTime: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  name: PropTypes.string,
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func,
  seen: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string
};

export default SectionFooterNew;
