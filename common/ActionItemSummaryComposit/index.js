import ButtonCounter from './../ButtonCounter';
import Icon from './../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

const ICON_WIDTH = 24;
const SPACE = 80;

class ActionItemSummaryComposit extends React.Component {
    constructor(props) {
        super(props);
        this.renderIcons = this.renderIcons.bind(this);
        this.isRendered = false;
    }

    componentDidMount() {
        this.isRendered = true;
        this.forceUpdate();
    }

    renderIcons() {
        if (this.isRendered) {
            const width = this.refs.container.offsetWidth;
            const number = Math.floor((width - SPACE) / ICON_WIDTH);
            const icons = this.props.icons;
            const shownIcons = icons.slice(0, number);
            const iconsMap = shownIcons.map((icon, key) => {
                return (
                    <Icon
                        className={styles.icon}
                        icon={icon}
                        key={key}
                        size={"large1"}
                    />
                );
            });
            const numberLeft = this.props.icons.length - number;
            const content = [iconsMap,
                <ButtonCounter className={styles.cb} key={"bc"} number={numberLeft} size={'standard'} />,
                <Icon className={styles.arrow} icon={"icon-keyboard_arrow_down"} key={"icon"} size={"large1"} />
            ];

            return content;
        }
        return null;
    }

    render() {
        const icons = this.renderIcons();

        return (
            <div
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
                ref={"container"}
            >
                {icons}
            </div>
        );
    }
}

ActionItemSummaryComposit.propTypes = {
    className: React.PropTypes.string,
    icons: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default ActionItemSummaryComposit;
