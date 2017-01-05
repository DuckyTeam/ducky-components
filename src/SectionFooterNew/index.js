import React from 'react';
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
  buttonText: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  dateTime: React.PropTypes.number,
  icon: React.PropTypes.string,
  name: React.PropTypes.string,
  onNextClick: React.PropTypes.func,
  onPreviousClick: React.PropTypes.func,
  seen: React.PropTypes.bool,
  text: React.PropTypes.string,
  type: React.PropTypes.string
};

export default SectionFooterNew;
