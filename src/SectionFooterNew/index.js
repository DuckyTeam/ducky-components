import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Icon from '../Icon';
import ButtonIcon from '../ButtonIcon';
import Button from '../Button';
import ButtonRaised from '../ButtonRaised';


function SectionFooterNew(props) {

let optbt='';

  if (props.type === 'TILBAKE') {

  optbt =  (
    <ButtonIcon icon={props.icon}>
      {props.type}
      </ButtonIcon>
    );

    }
    else if (props.type === 'AVBRYT') {


  optbt =  (
    <Button>{props.type}</Button>
      );

    }
    else if (props.type === 'TILBAKE-NESTE') {
    optbt =  (
      <div className={classNames(styles.wrapper, props.className)}>
        <ButtonIcon
            icon={props.icon}
        >TILBAKE</ButtonIcon>
        <ButtonRaised
            theme={'dark'}>NESTE</ButtonRaised>
      </div>
      );

    }

    else if (props.type === 'AVBRYT-FULL') {
     optbt =  (
     <div className={classNames(styles.wrapper, props.className)}>
         <Button>AVRYT</Button>
         <ButtonRaised>FULLFØR</ButtonRaised>
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
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    dateTime: React.PropTypes.number,
    icon: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    seen: React.PropTypes.bool,
    text: React.PropTypes.string,
    type: React.PropTypes.string
};

export default SectionFooterNew;
