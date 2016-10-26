import React from 'react';
import Typo from './../Typography';
import Wrapper from './../Wrapper';
import styles from './styles.css';

function PopoverMenu(props) {
  return (
    <span onClick={props.onClick}>
      <Wrapper className={styles.wrapper}
        size={'short'}
        >
        <Typo type={'bodyTextNormal'}>
          {props.text}
        </Typo>
      </Wrapper>
    </span>
  );
}

PopoverMenu.displayName = "Popover Menu";
PopoverMenu.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string
};
export default PopoverMenu;
