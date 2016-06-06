import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

import Consumption01 from 'ducky-assets/vector_graphics/activities/act_consumption_01_repair.svg';
import Consumption02 from
    'ducky-assets/vector_graphics/activities/act_consumption_02_buy_used.svg';
import Consumption03 from 'ducky-assets/vector_graphics/activities/act_consumption_03_charity.svg';
import Consumption04 from 'ducky-assets/vector_graphics/activities/act_consumption_04_diy.svg';
import Energy01 from 'ducky-assets/vector_graphics/act_energy_01_shower.svg';
import Energy02 from 'ducky-assets/vector_graphics/act_energy_02_cat_wash.svg';
import Energy03 from 'ducky-assets/vector_graphics/act_energy_03_no_power.svg';
import Energy04 from 'ducky-assets/vector_graphics/act_energy_04_standbyfree.svg';
import Energy05 from 'ducky-assets/vector_graphics/act_energy_05_twenty_deg.svg';
import Energy06 from 'ducky-assets/vector_graphics/act_energy_06_one_deg.svg';
import Energy07 from 'ducky-assets/vector_graphics/act_energy_07_two_deg.svg';
import Food01 from 'ducky-assets/vector_graphics/act_food_01_dairy.svg';
import Food02 from 'ducky-assets/vector_graphics/act_food_02_food_waste.svg';
import Food03 from 'ducky-assets/vector_graphics/act_food_03_veggie_dinner.svg';
import Food04 from 'ducky-assets/vector_graphics/act_food_04_veggie_day.svg';
import Food05 from 'ducky-assets/vector_graphics/act_food_05_more_green.svg';
import Food06 from 'ducky-assets/vector_graphics/act_food_06_fish.svg';
import Social from 'ducky-assets/vector_graphics/social.svg';
import Social01 from 'ducky-assets/vector_graphics/act_social_01_compliment.svg';
import Social02 from 'ducky-assets/vector_graphics/act_social_02_smile.svg';
import Social03 from 'ducky-assets/vector_graphics/act_social_03_converse.svg';
import Social04 from 'ducky-assets/vector_graphics/act_social_04_common_hero.svg';
import Social05 from 'ducky-assets/vector_graphics/act_social_05_promote.svg';
import Social06 from 'ducky-assets/vector_graphics/act_social_06_visit_neighbor.svg';
import Transport01 from 'ducky-assets/vector_graphics/act_transport_01_bike_work.svg';
import Transport02 from 'ducky-assets/vector_graphics/act_transport_02_public_work.svg';
import Transport03 from 'ducky-assets/vector_graphics/act_transport_03_pool_work.svg';
import Transport04 from 'ducky-assets/vector_graphics/act_transport_04_bike_leisure.svg';
import Transport05 from 'ducky-assets/vector_graphics/act_transport_05_public_leisure.svg';
import Transport06 from 'ducky-assets/vector_graphics/act_transport_06_pool_leisure.svg';
import NoShopping from 'ducky-assets/vector_graphics/activity-no-shopping.svg';

const source = {
    Consumption01,
    Consumption02,
    Consumption03,
    Consumption04,
    Energy01,
    Energy02,
    Energy03,
    Energy04,
    Energy05,
    Energy06,
    Energy07,
    Food01,
    Food02,
    Food03,
    Food04,
    Food05,
    Food06,
    Social,
    Social01,
    Social02,
    Social03,
    Social04,
    Social05,
    Social06,
    Transport01,
    Transport02,
    Transport03,
    Transport04,
    Transport05,
    Transport06,
    NoShopping
};

function IconSVG(props) {
    return (
        <img
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
            src={source[props.icon]}
            style={props.style}
        >
        </img>
    );
}

IconSVG.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    size: React.PropTypes.oneOf(['small', 'standard',
        'large', 'display1', 'display2']),
    style: React.PropTypes.objectOf(React.PropTypes.oneOfType(
        [React.PropTypes.number, React.PropTypes.string]
    ))
};

export default IconSVG;
