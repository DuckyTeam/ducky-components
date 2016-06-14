import React from 'react';
import TextImageElement from '../TextImageElement';
import IconAvaWrapper from '../composites/IconAvaWrapper';
import styles from './styles.css';
let opt = '';

class TextLinkElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // textAreaValue: ""
        };
        this.handleLinkAddition = this.handleLinkAddition.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleTextAreaChange() {
        this.setState({textAreaValue: event.target.value});
    }

    handleLinkAddition() {
        opt = (
            <div>
                <textarea
                    id="link"
                    onSubmit={this.handleTextAreaChange}
                    placeholder={"Enter URL..."}
                    value={this.state.textAreaValue}
                />
                <br />
                <button onClick={this.handleAddLinkToText}>
                    {"Submit Link"}
                </button>
            </div>
        );
    }

    handleAddLinkToText() {
        let url = document.getElementById("link").value;

        if (url.search("http") === -1) {
            url = "http://".concat(url);
        }

        opt = (
            <a href={url}
                target={"_blank"}
            >
                <div className={styles.url}>
                    {url}
                </div>
            </a>
        );
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
    link: React.PropTypes.string
};

export default TextLinkElement;
