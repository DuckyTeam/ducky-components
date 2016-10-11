import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class MenuWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleWrapperClick = this.handleWrapperClick.bind(this);
    }

    handleWrapperClick(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <div className={classNames(styles.menuWrapper, {
                [this.props.className]: this.props.className
            })}
                onClick={this.handleWrapperClick}
            >
                <div
                    className={styles[(this.props.show ? 'show' : '') + this.props.alignment]}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MenuWrapper.propTypes = {
    alignment: PropTypes.oneOf(['left', 'right']),
    children: PropTypes.node,
    className: PropTypes.string,
    show: PropTypes.bool
};

export default MenuWrapper;
