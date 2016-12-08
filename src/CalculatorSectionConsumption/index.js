import React from 'react';
import classNames from 'classnames';
import ModalFullsize from '../ModalFullsize';
import CalculatorGeneralItem from '../CalculatorGeneralItem';
import IconCircularFrame from '../IconCircularFrame';
import CarouselNavigator from '../CarouselNavigator';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import AverageFootprintComparison from '../AverageFootprintComparison';
import LabelNumberDisplay1 from '../LabelNumberDisplay1';
import SubcategoryList from '../SubcategoryList';
import SectionFooterNew from '../SectionFooterNew';
import styles from './styles.css';

function CalculatorSectionConsumption(props) {
  return (
    <ModalFullsize className={classNames(styles.ModalFullsize)}
      show={props.show}
      >
      <div
        className={classNames(styles.mainImage)}
        style={{backgroundImage: `url(${props.imageConsumptionMain})`}}
        >
        <div className={classNames(styles.icon)}>
          <IconCircularFrame
            icon={props.icon || "icon-shopping_cart"}
            />
        </div>
      </div>
      <div className={classNames(styles.wrapperWrap)}>
        <Wrapper size="standard">
          <Typography type="ingressTitle">
            {props.title}
          </Typography>
        </Wrapper>
        <Wrapper size="side-bottom">
          <Typography type="bodyTextNormal">
            {props.caption}
          </Typography>
        </Wrapper>
      </div>
      <div>
      </div>
      <Spacer size="standard" />
      <CalculatorGeneralItem
        expanded={props.expandedProducts}
        inactive={props.inactiveProducts}
        label={props.labelProducts}
        value={props.valueProducts}
        >
        {props.calcProducts}
      </CalculatorGeneralItem>
      <CalculatorGeneralItem
        expanded={props.expandedRepaired}
        inactive={props.inactiveRepaired}
        label={props.labelRepaired}
        value={props.valueRepaired}
        >
        {props.calcRepaired}
      </CalculatorGeneralItem>
      <CalculatorGeneralItem
        expanded={props.expandedEtics}
        inactive={props.inactiveEtics}
        label={props.labelEtics}
        value={props.valueEtics}
        >
        {props.calcEtics}
      </CalculatorGeneralItem>
      <CalculatorGeneralItem
        expanded={props.expandedServicevsprod}
        inactive={props.inactiveServicevsprod}
        label={props.labelServicevsprod}
        value={props.valueService}
        >
        {props.calcServicevsprod}
      </CalculatorGeneralItem>
      <CalculatorGeneralItem
        expanded={props.expandedRecycle}
        inactive={props.inactiveRecycle}
        label={props.labelRecycle}
        value={props.valueRecycle}
        >
        {props.calcRecycle}
      </CalculatorGeneralItem>
      <Spacer size="standard" />
      <AverageFootprintComparison
        color={props.colorAverageFoorprint}
        icon={props.iconAverageFootprint}
        />
      <Wrapper size="standard">
        <Typography type="ingressTitle">
          {props.footprintTitle}
        </Typography>
      </Wrapper>
      <Wrapper size="side-bottom">
        <Typography type="bodyTextNormal">
          {props.footprintCaption}
        </Typography>
      </Wrapper>
      <Wrapper
        className={classNames(styles.co2wrapper)}
        size="standard"
        >
        <LabelNumberDisplay1
          captionCo2={props.captionCo2}
          captionNumber={props.captionNumber}
          icon={props.footprintIcon || "icon-gnome"}
          theme={props.theme}
          />
      </Wrapper>
      <Spacer size="standard" />
      <SubcategoryList
        sortedCategories={props.sortedCategories}
        title={props.categorylistHeading}
        />
      <CarouselNavigator
        currentSlide={props.carCurrentSlide}
        slideCount={props.slideCount}
        />
      <SectionFooterNew
        buttonText={props.sectionFooterButtontext || "NESTE"}
        icon={props.iconSectionFooter || "icon-keyboard_arrow_left"}
        text={props.sectionFooterText || "TILBAKE"}
        type="SEF007"
        />
    </ModalFullsize>
  );
}

CalculatorSectionConsumption.propTypes = {
  calcEtics: React.PropTypes.string,
  calcProducts: React.PropTypes.string,
  calcRecycle: React.PropTypes.string,
  calcRepaired: React.PropTypes.string,
  calcServicevsprod: React.PropTypes.string,
  caption: React.PropTypes.string,
  captionCo2: React.PropTypes.string,
  captionNumber: React.PropTypes.string,
  carCurrentSlide: React.PropTypes.string,
  categorylistHeading: React.PropTypes.string,
  colorAverageFoorprint: React.PropTypes.string,
  currentSlide: React.PropTypes.number,
  expandedEtics: React.PropTypes.bool,
  expandedProducts: React.PropTypes.bool,
  expandedRecycle: React.PropTypes.bool,
  expandedRepaired: React.PropTypes.bool,
  expandedServicevsprod: React.PropTypes.bool,
  footprintCaption: React.PropTypes.string,
  footprintIcon: React.PropTypes.string,
  footprintTitle: React.PropTypes.string,
  icon: React.PropTypes.string,
  iconAverageFootprint: React.PropTypes.string,
  iconSectionFooter: React.PropTypes.bool,
  imageConsumptionMain: React.PropTypes.string,
  inactiveEtics: React.PropTypes.bool,
  inactiveProducts: React.PropTypes.bool,
  inactiveRecycle: React.PropTypes.bool,
  inactiveRepaired: React.PropTypes.bool,
  inactiveServicevsprod: React.PropTypes.bool,
  labelEtics: React.PropTypes.string,
  labelProducts: React.PropTypes.string,
  labelRecycle: React.PropTypes.string,
  labelRepaired: React.PropTypes.string,
  labelServicevsprod: React.PropTypes.string,
  sectionFooterButtontext: React.PropTypes.number,
  sectionFooterText: React.PropTypes.number,
  show: React.PropTypes.bool,
  slideCount: React.PropTypes.number,
  sortedCategories: React.PropTypes.array,
  theme: React.PropTypes.string,
  title: React.PropTypes.string,
  valueEtics: React.PropTypes.string,
  valueProducts: React.PropTypes.string,
  valueRecycle: React.PropTypes.string,
  valueRepaired: React.PropTypes.string,
  valueService: React.PropTypes.string
};

export default CalculatorSectionConsumption;
