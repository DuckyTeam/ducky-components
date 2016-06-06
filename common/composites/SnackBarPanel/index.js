import Icon from '../../Icon';
import LabelStandard from '../../LabelStandard';
import React from 'react';
import Typography from '../../Typography';
import Wrapper from '../../Wrapper';
import styles from './SnackBar.css';
const PropTypes = React.PropTypes;

class SnackBarPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.stopPropagation();
    }

    render() {
        let opt = '';

        if (!this.props.show) {
            return null;
        }
        if (this.props.type === 'co2') {
            opt = (
                <LabelStandard
                    className={styles.typo}
                    content={this.props.co2Pt}
                    icon={'icon-leaf'}
                />
            );
        } else if (this.props.type === 'points') {
            opt = (
                <LabelStandard
                    className={styles.typo}
                    content={this.props.duckyPt}
                    icon={'icon-brightness_high'}
                />
            );
        } else {
            opt = (
                <div>
                    <LabelStandard
                        className={styles.typo}
                        content={this.props.co2Pt}
                        icon={'icon-leaf'}
                    />
                    <LabelStandard
                        className={styles.typo}
                        content={this.props.duckyPt}
                        icon={'icon-brightness_high'}
                    />
                </div>
            );
        }

        return (
            <Wrapper
                className={styles.Wrapper}
                onClick={this.handleClick}
                size={'standard'}
            >
                <div className={styles.wrapperIcon}>
                    <Icon
                        icon={this.props.duckyIcon}
                        size={'large2'}
                    />
                </div>
                <Typography className={styles.msgText}
                    type="ingressNormal"
                >
                    {this.props.msgText}
                </Typography>

                <div className={styles.label}>
                    {opt}
                </div>
            </Wrapper>
    );
    }
}

SnackBarPanel.propTypes = {
    co2Pt: PropTypes.string,
    duckyIcon: PropTypes.string,
    duckyPt: PropTypes.string,
    msgText: PropTypes.string,
    onHide: React.PropTypes.func.isRequired,
    show: PropTypes.bool,
    type: PropTypes.oneOf(['points', 'co2', 'both'])
};

export default SnackBarPanel;
