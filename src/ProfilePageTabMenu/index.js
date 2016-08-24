import CaptionTabMenu from '../CaptionTabMenu';
import React from 'react';
const PropTypes = React.PropTypes;

function ProfilePageTabMenu(props) {
    return (
        <CaptionTabMenu
            alignment={'left'}
            changeTab={props.changeTab}
            disabled={props.disabled}
            selected={props.selected}
            tabs={[
                {label: 'Aktivitet', icon: 'icon-dashboard'},
                {label: 'Innsikt', icon: 'icon-timeline'},
                {label: 'Fotavtrykk', icon: 'icon-gnome'}
            ]}
        />
    );
}


ProfilePageTabMenu.propTypes = {
    alignment: PropTypes.oneOf(['left', 'center', 'split']),
    changeTab: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.arrayOf(React.PropTypes.number),
    selected: PropTypes.number
};

export default ProfilePageTabMenu;
