import Button from './../Button';
import Icon from './../Icon';
import React from 'react';
import Wrapper from './../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

class TabMenuIconButtons extends React.Component {
    getMenu() {
        const icons = this.props.icons;

        return icons.map((el, key) => {
            const cn = (key === this.props.selected) ? styles.buttonSelected : styles.button;

            return (
                <Button
                    className={cn}
                    key={key}
                    onClick={() => this.props.onClick(key)}
                >
                    <Icon
                        className={styles.icon}
                        icon={el}
                        key={key}
                        size={"large1"}
                    />
                </Button>
            );
        });
    }
    getContent(number) {
        return this.props.children[number];
    }
    render() {
        const menu = this.getMenu();
        const content = this.getContent(this.props.selected);

        return (
            <div className={classNames(styles.wrapper,
                {[this.props.className]: this.props.className})}
            >
                {menu}
                <Wrapper
                    className={styles.innerWrapper}
                    size={"standard"}
                >
                    {content}
                </Wrapper>
            </div>
        );
    }
}

TabMenuIconButtons.displayName = "Tab Menu 1 - Icon Buttons";
TabMenuIconButtons.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node),
    className: React.PropTypes.string,
    icons: React.PropTypes.arrayOf(React.PropTypes.string),
    onClick: React.PropTypes.func,
    selected: React.PropTypes.number
};

export default TabMenuIconButtons;
