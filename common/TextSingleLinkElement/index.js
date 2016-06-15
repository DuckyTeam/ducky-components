import React from 'react';
import TextImageElement from '../TextImageElement';
import IconAvaWrapper from '../composites/IconAvaWrapper';
import LogButton from '../LogButton';
import styles from './styles.css';
let opt = '';

class TextLinkElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleLinkAddition = this.handleLinkAddition.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleAddLinkToText = this.handleAddLinkToText.bind(this);
        this.handleLinkHide = this.handleLinkHide.bind(this);
    }

    handleTextAreaChange() {
        this.setState({textAreaValue: event.target.value});
    }

    handleLinkAddition() {
        opt = (
            <div className={styles.wrapper}>
                <textarea
                    id="link"
                    onSubmit={this.handleTextAreaChange}
                    placeholder={"Enter URL..."}
                    value={this.state.textAreaValue}
                />
                <LogButton checked
                    className={styles.logButton}
                    onClick={this.handleAddLinkToText}
                />
            </div>
        );
    }

    handleAddLinkToText(event) {
        event.cancelBubble = true;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        let url = document.getElementById("link").value;

        if (url && url.search("http") === -1) {
            url = "http://".concat(url);
        }
        if (url) {
            opt = (
                <div className={styles.wrapper}>
                    <a href={url}
                        target={"_blank"}
                    >
                        <div className={styles.url}>
                            {url}
                        </div>
                    </a>
                    <i
                        className={`icon-close ${styles.close}`}
                        onClick={this.handleLinkHide}
                    />
                </div>
        );
        } else {
            opt = '';
        }
    }

    handleLinkHide(event) {
        event.cancelBubble = true;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        opt = '';
    }

    render() {
        return (
            <span>
                <div className={styles.wrapper}>
                    <TextImageElement>
                        {this.props.children}
                    </TextImageElement>
                    {opt}
                    <br />
                    <IconAvaWrapper
                        icon={'icon-tune'}
                        onClick={this.handleLinkAddition}
                    />
                </div>
            </span>
        );
    }
}

TextLinkElement.propTypes = {
    children: React.PropTypes.node,
    handleLinkHide: React.PropTypes.node
};

export default TextLinkElement;
