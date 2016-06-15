import Icon from '../../Icon';
import LabelStandard from '../../LabelStandard';
import React from 'react';
import Typography from '../../Typography';
import Wrapper from '../../Wrapper';
import styles from './styles.css';
const PropTypes = React.PropTypes;
let interval = 0;
let current = 0;

class SnackBarPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.stopPropagation();
    }
    animateValue() {
        const range = this.props.co2Pt;
        const stepTime = Math.abs(Math.floor(2000 / range));

        interval = setInterval(() => {
            current += 1;
            document.getElementById('typo').innerHTML = current;
            if (current === this.props.co2Pt) {
                clearInterval(interval);
            }
        }, stepTime);
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
    co2Pt: PropTypes.number,
    duckyIcon: PropTypes.string,
    duckyPt: PropTypes.string,
    msgText: PropTypes.string,
    show: PropTypes.bool,
    type: PropTypes.oneOf(['points', 'co2', 'both'])
};

export default SnackBarPanel;
