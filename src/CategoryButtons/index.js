import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import ActionButton from '../ActionButton';

const categories = [{
    icon: 'icon-restaurant_menu',
    name: 'Mat',
    type: 'food'
}, {
    icon: 'icon-shopping_cart',
    name: 'Forbruk',
    type: 'consumption'
}, {
    icon: 'icon-flash_on',
    name: 'Energi',
    type: 'energy'
}, {
    icon: 'icon-highway',
    name: 'Transport',
    type: 'transport'
}, {
    icon: 'icon-tag_faces',
    name: 'Sosialt',
    type: 'social'
}];

class CategoryButtons extends React.Component {
    constructor(props) {
        super(props);
        this.handleCategoryClick = {};
        categories.forEach((category) => {
            this.handleCategoryClick[category.type] = this.onCategoryClick
                                                        .bind(this, category.type);
        });
    }
    onCategoryClick(categoryName) {
        this.props.onCategoryClick(categoryName);
    }
    renderIcons() {
        return categories.map((category, index) => {
            return (
                <ActionButton
                    className={classNames(styles.button, {
                        [styles.active]: this.props.activeCategory === category.type,
                        [styles[`${this.props.activeCategory}Active`]]:
                        this.props.activeCategory === category.type
                    })}
                    icon={category.icon}
                    key={index}
                    onClick={this.handleCategoryClick[category.type]}
                    size="standard"
                />
            );
        });
    }
    render() {
        return (
            <div
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
            >
                {this.renderIcons()}
            </div>
        );
    }
}

CategoryButtons.propTypes = {
    activeCategory: PropTypes.oneOf(['food', 'consumption', 'energy', 'transport', 'social']),
    className: PropTypes.string,
    onCategoryClick: PropTypes.func
};

export default CategoryButtons;
