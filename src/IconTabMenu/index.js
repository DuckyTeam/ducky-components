import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class TabMenu extends React.Component {

    handleTabClick(index) {
        this.props.changeTab(index);
    }

    getTabs() {
        return this.props.tabs.map((icon, key) => {
            const selected = (key === this.props.selected);
            const disabled = (this.props.disabled.indexOf(key) > -1);

            return (
                <button
                    className={styles.button}
                    disabled={disabled}
                    key={key}
                    onClick={this.handleTabClick.bind(this, key)}
                >
                    <div
                        className={classNames(styles.labelWrapper, {
                            [styles.selected]: selected,
                            [styles.disabled]: disabled
                        })}
                    >
                        <IconAvaWrapper
                            className={classNames(styles.label, {
                                [styles.selectedLabel]: selected,
                                [styles.disabledLabel]: disabled
                            })}
                            icon={icon}
                        />
                    </div>
                </button>
            );
        });
    }

    render() {
        return (
            <div
                className={classNames(styles.container, {
                    [this.props.className]: [this.props.className]
                })}
            >
                {this.getTabs()}
            </div>
        );
    }
}

TabMenu.propTypes = {
    changeTab: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.arrayOf(React.PropTypes.number),
    selected: PropTypes.number,
    tabs: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default TabMenu;
