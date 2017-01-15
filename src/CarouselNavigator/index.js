import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

class CarouselNavigator extends React.Component {
  handleDotClick(index) {
    if (!this.props.changeDot) {
      return null;
    }
    return this.props.changeDot(index);
  }

  render() {
    const dotCount = this.props.slideCount;
    // Does not work in IE11 and below: const dotsArray = new Array(dotCount).fill(0);
    const dotsArray = new Array(dotCount + 1).join('0').split('');

    const dots = dotsArray.map((dot, index) => {
      const className = classNames(styles.inactive, {
        [styles.dotActive]: (dotCount >= this.props.currentSlide
          ? this.props.currentSlide === index : index === 0)
      }, {[this.props.className]: this.props.className});

      return (
        <li
          className={className}
          id={index}
          key={index}
          onClick={() => this.handleDotClick(index)}
          />
      );
    });

    return (
      <div className={styles.outwrapper}>
        <ul className={styles.wrapper}>
          {dots}
        </ul>
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
