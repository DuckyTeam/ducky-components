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
    renderIcons() {
        if (this.isRendered) {
            var width = this.refs.container.offsetWidth;
            var number = Math.floor((width-SPACE)/ICON_WIDTH);
            const icons = this.props.icons.slice(0, number);
            var content = icons.map(function(icon){
                return (
                    <Icon
                        className={styles.icon}
                        icon={icon}
                        size={"large1"}
                    />
                );
            });
            const numberLeft = this.props.icons.length - number;2
            content = [content,
                <ButtonCounter className={styles.cb} number={numberLeft} size={'standard'}/>,
                <Icon className={styles.arrow} icon={"icon-keyboard_arrow_down"} size={"large1"}/>];
            return content;
        }
    }

    componentDidMount(){
        this.isRendered = true;
        this.forceUpdate();
    }

    render() {
        const icons = this.renderIcons();
        return(
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
    className: React.PropTypes.string
};

export default ActionItemSummaryComposit;