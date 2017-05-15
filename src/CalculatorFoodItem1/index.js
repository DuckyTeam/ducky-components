import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CalculatorFoodItem1(props) {
  return (
    <div>
      <Wrapper
        className={styles.wrapper}
        size="standard"
        >
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'little'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatLittle}
          onClick={() => props.onClick(props.lblEatLittle)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'woman'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatTypicalWoman}
          onClick={() => props.onClick(props.lblEatTypicalWoman)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'avg'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatAverage}
          onClick={() => props.onClick(props.lblEatAverage)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'man'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatTypicalMan}
          onClick={() => props.onClick(props.lblEatTypicalMan)}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'horse'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatLikeHorse}
          onClick={() => props.onClick(props.lblEatLikeHorse)}
          />
      </Wrapper>
      <Wrapper size="side-bottom">
        <Typography>
          {props.children}
        </Typography>
      </Wrapper>
    </div>
  );
}

CalculatorFoodItem1.propTypes = {
  checked: PropTypes.bool,
  checkedEatAmount: PropTypes.oneOf(['little', 'woman', 'avg', 'man', 'horse']),
  children: PropTypes.string,
  className: PropTypes.string,
  lblEatAverage: PropTypes.string,
  lblEatLikeHorse: PropTypes.string,
  lblEatLittle: PropTypes.string,
  lblEatTypicalMan: PropTypes.string,
  lblEatTypicalWoman: PropTypes.string,
  onClick: PropTypes.func
};

export default CalculatorFoodItem1;
