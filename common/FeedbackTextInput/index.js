import IcoW01 from '../IconAvaWrapper';
import React from 'react';
import Wra16A from '../Wrapper';
import styles from './FeedbackTextInput.css';

class FeedbackTextInput extends React.Component {
    render() {
        return (
            <Wra16A className={styles.wrapper}
                size={"standard"}
            >
                <textArea
                    autoFocus
                    className={styles.textArea}
                    onChange={this.props.onChange}
                    placeholder={this.props.prompt}
                />
                <IcoW01 className={styles.icon}
                    icon={"icon-send"}
                    onClick={this.props.onSubmit}
                    size={"standard"}
                />
            </Wra16A>
        );
    }
}

FeedbackTextInput.displayName = "Feedback Text Input";
FeedbackTextInput.propTypes = {
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    prompt: React.PropTypes.string
};
export default FeedbackTextInput;
