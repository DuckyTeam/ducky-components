import React from 'react';
import Spacer from '../Spacer';
import classNames from 'classnames';
import styles from './styles.css';
let currentSlide = 0;

class CarouselNavigator1 extends React.Component {
    handleClick(spec, event) {
        event.preventDefault();
        currentSlide = spec.index;
    }

    render() {
        const dotCount = this.props.slideCount;
        let dots = Array(...Array(dotCount + 1).join('0').split('')).map((pre, iter) => {
            let className = this.props.theme === 'dark' ? classNames(styles.darkInactive, {
                [styles.darkActive]: (dotCount > currentSlide
                    ? currentSlide === iter : iter === 0)
            }, {[this.props.className]: this.props.className})
            : classNames(styles.inactive, {
                [styles.dotActive]: (dotCount > currentSlide
                    ? currentSlide === iter : iter === 0)
            }, {[this.props.className]: this.props.className});

            const dotOptions = {
                index: iter
            };

            return (
                <li
                    className={className}
                    id={iter}
                    key={iter}
                    onClick={this.handleClick.bind(this, dotOptions)}
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

CarouselNavigator1.propTypes = {
    className: React.PropTypes.string,
    slideCount: React.PropTypes.number,
    theme: React.PropTypes.string
};

export default CarouselNavigator1;
