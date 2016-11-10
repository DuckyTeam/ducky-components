import React from 'react';
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
          onClick={props.onClick}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'woman'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatTypicalWoman}
          onClick={props.onClick}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'avg'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatAverage}
          onClick={props.onClick}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'man'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatTypicalMan}
          onClick={props.onClick}
          />
        <Spacer />
        <RadioButton
          checked={props.checkedEatAmount.toLowerCase() === 'horse'}
          className={classNames({[props.className]: props.className})}
          label={props.lblEatLikeHorse}
          onClick={props.onClick}
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
  checked: React.PropTypes.bool,
  checkedEatAmount: React.PropTypes.oneOf(['little', 'woman', 'avg', 'man', 'horse']),
  children: React.PropTypes.string,
  className: React.PropTypes.string,
  lblEatAverage: React.PropTypes.string,
  lblEatLikeHorse: React.PropTypes.string,
  lblEatLittle: React.PropTypes.string,
  lblEatTypicalMan: React.PropTypes.string,
  lblEatTypicalWoman: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default CalculatorFoodItem1;
