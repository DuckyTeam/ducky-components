import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../Spacer';
import ProgressbarLabeledPercentage from '../ProgressbarLabeledPercentage';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

class SubcategoryList extends React.Component {
  renderBar() {
    const sortedCategories = this.props.sortedCategories;

    return sortedCategories.map((category, index) => {
      return (
        <div
          key={index}
          >
          <ProgressbarLabeledPercentage
            categoryText={category.label}
            color={category.color}
            percent={category.percent}
            scaledPercent={category.scaledPercent}
            />
          <Spacer size="double" />
        </div>
        );
    });
  }

  render() {
    return (
      <Wrapper
        className={styles.wrapper}
        size="standard"
        >
        <Typography
          type="bodyTextNormal"
          >
          {this.props.title}
        </Typography>
        <Spacer size="double" />
        {this.renderBar()}
      </Wrapper>
    );
  }
}

SubcategoryList.propTypes = {
  sortedCategories: PropTypes.array,
  title: PropTypes.string
};

export default SubcategoryList;
