import React from 'react';
import styles from './styles.css';

class Preview extends React.Component {
    render() {
        return (
            <div
                className={styles.wrapper}
                style={{width: this.props.width || 'auto', height: this.props.height || 'auto'}}
            >
                <div className={styles.title}>
                    {this.props.title}
                </div>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Preview.propTypes = {
    children: React.PropTypes.node,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    width: React.PropTypes.number
};

export default Preview;
