import React from 'react';
import styles from './MenuWrapper.css';
const PropTypes = React.PropTypes;

class MenuWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuRef = this.handleMenuRef.bind(this);
        this.onWindowClick = this.onWindowClick.bind(this);
    }

    componentDidMount() {
        if (this.props.show) {
            setTimeout(() => {
                window.addEventListener('click', this.onWindowClick);
            }, 0);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.show !== this.props.show && this.props.show) {
            setTimeout(() => {
                window.addEventListener('click', this.onWindowClick);
            }, 0);
        } else if (prevProps.show !== this.props.show) {
            window.removeEventListener('click', this.onWindowClick);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    handleMenuRef(component) {
        this.menu = component;
    }

    onWindowClick(event) {
        let target = event.target;

        while (target) {
            if (target === this.menu) {
                return;
            }
            target = target.parentNode;
        }
        this.props.onHide();
    }

    render() {
        return (
            <div className={styles.menuWrapper}>
                <div
                    className={styles[(this.props.show ? 'show' : '') + this.props.alignment]}
                    ref={this.handleMenuRef}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MenuWrapper.propTypes = {
    alignment: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool
};

export default MenuWrapper;
