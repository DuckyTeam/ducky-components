import React from 'react';
import CarouselNavigator from '../CarouselNavigator';
import IconAvaWrapper from '../IconAvaWrapper';
// import classNames from 'classnames';
import styles from './styles.css';
import Spacer from '../Spacer';
// let slideIndex = 1;

class CarouselStandard1 extends React.Component {

/*    showSlides(slideNumber) {
        let counter = 0;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementById("carouselNavigator");

        if (slideNumber > this.props.slideCount) {
            slideIndex = 1;
        }

        if (slideNumber > 1) {
            slideIndex = this.props.slideCount;
        }

        for (counter = 0; counter < this.props.slideCount; counter += 1) {
            slides[counter].style.display = "none";
        }

        for (counter = 0; counter < dots.length; counter += 1) {
            dots[counter].className = dots[counter].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    handleplusSlides(slideNumber) {
        this.showSlides(slideIndex += slideNumber);
    }

    currentSlide(slideNumber) {
        this.showSlides(slideIndex = slideNumber);
    }
*/
    render() {
        return (
            <div className={styles.outerWrapper}>
                <div className={styles.innerWrapper}>
                    <IconAvaWrapper
                        className={this.props.leftactive ? styles.iconActive : styles.iconInactive}
                        icon={'icon-keyboard_arrow_left'}
                        // onClick={this.handleplusSlides(-1)}
                        onClick={this.props.handleLeftClick}
                    />
                    <div className={"mySlides"}>
                        {this.props.children}
                    </div>
                    <IconAvaWrapper
                        className={this.props.rightactive ? styles.iconActive : styles.iconInactive}
                        icon={'icon-keyboard_arrow_right'}
                        // onClick={this.handleplusSlides(1)}
                        onClick={this.props.handleRightClick}
                    />
                </div>
                <div className={styles.carouselNavigator}
                    id={"carouselNavigator"}
                >
                    <Spacer size={'double'} />
                    <CarouselNavigator
                        slideCount={this.props.slideCount}
                        theme={'dark'}
                    />
                    <Spacer size={'double'} />
                </div>
            </div>
        );
    }
}

CarouselStandard1.propTypes = {
    children: React.PropTypes.string,
    handleLeftClick: React.PropTypes.func,
    handleRightClick: React.PropTypes.func,
    leftactive: React.PropTypes.bool,
    rightactive: React.PropTypes.bool,
    slideCount: React.PropTypes.number,
    theme: React.PropTypes.string
};

export default CarouselStandard1;
