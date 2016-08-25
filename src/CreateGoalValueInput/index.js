/* eslint-disable react/no-set-state */
import Wrapper from '../Wrapper';
import Input from '../Input';
import LabelHorisontal from '../LabelHorisontal';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

class CreateGoalValueInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputErrorMessage: null,
            inputValue: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    showLabelHorisontal() {
        let icon = 'icon-leaf';
        let text = 'Innsparing kgCO\u2082e';

        if (this.props.type.toUpperCase() === 'POINTS') {
            icon = 'icon-brightness_high';
            text = 'Poeng';
        } else if (this.props.type.toUpperCase() === 'ACTIVITY') {
            icon = 'icon-check_circle';
            text = 'Antall ganger';
        }
        return (
            <LabelHorisontal
                className={classNames(styles.labelHorisontal,
                    {[styles.points]: this.props.type.toUpperCase() === 'POINTS'},
                    {[styles.co2]: this.props.type.toUpperCase() === 'CO2'},
                    {[styles.activity]: this.props.type.toUpperCase() === 'ACTIVITY'},
                )}
                icon={icon}
                text={text}
            />
        );
    }

    handleInputChange(event) {
        if (event.target.value.length === 0 || isNaN(event.target.value)) {
            event.target.value = null;
            this.setState({inputErrorMessage: "Du må fylle inn en tallverdi i feltet", inputValue: event.target.value});
        } else {
            this.setState({inputErrorMessage: null, inputValue: event.target.value});
        }
    }

    render() {
        return (
            <Wrapper
                className={classNames(styles.wrapper, {
                    [this.props.className]: this.props.className
                })}
                size={'narrow'}
            >
                <div>
                    {this.showLabelHorisontal()}
                    <Input
                        errorMessage={this.state.inputErrorMessage}
                        onChange={this.handleInputChange}
                        placeholder="Skriv inn antall ..."
                        value={this.state.inputValue}
                    />
                </div>
            </Wrapper>
        );
    }
}

CreateGoalValueInput.propTypes = {
    className: React.PropTypes.string,
    type: React.PropTypes.string
};

export default CreateGoalValueInput;
