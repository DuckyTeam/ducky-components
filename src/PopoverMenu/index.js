import React from 'react';
import Typo from './../Typography';
import Wrapper from './../Wrapper';
import styles from './PopoverMenu.css';


class PopoverMenu extends React.Component {
    render() {
        return (
            <span onClick={this.props.onClick}>
                <Wrapper className={styles.wrapper}
                    size={'short'}
                >
                    <Typo type={'bodyTextNormal'}>
                        {this.props.text}
                    </Typo>
                </Wrapper>
            </span>
        );
    }
}

PopoverMenu.displayName = "Popover Menu";
PopoverMenu.propTypes = {
    onClick: React.PropTypes.func,
    text: React.PropTypes.string
};
export default PopoverMenu;
