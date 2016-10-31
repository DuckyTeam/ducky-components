import React from 'react';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';

class CarouselNavigator extends React.Component {
  handleDotClick(index) {
    this.props.changeDot(index);
  }

  render() {
    const dotCount = this.props.slideCount;
    const dotsArray = new Array(dotCount).fill(0);

    let dots = dotsArray.map((dot, index) => {
      let className = classNames(styles.inactive, {
        [styles.dotActive]: (dotCount >= this.props.currentSlide
          ? this.props.currentSlide === index + 1 : index + 1 === 0)
      }, {[this.props.className]: this.props.className});

      return (
        <li
          className={className}
          id={index}
          key={index}
          onClick={this.handleDotClick.bind(this, index)}
          />
      );
    });

    return (
      <div className={styles.outwrapper}>
        <Spacer size={'double'} />
        <ul className={styles.wrapper}>
          {dots}
        </ul>
        <Spacer size={'double'} />
      </div>
    );
  }
}

CarouselNavigator.propTypes = {
  changeDot: React.PropTypes.func,
  className: React.PropTypes.string,
  currentSlide: React.PropTypes.number,
  slideCount: React.PropTypes.number,
  theme: React.PropTypes.string
};

export default CarouselNavigator;
