import React from 'react';
import SectionHeader from '../SectionHeaderGeneral';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

const COLUMNS = 2;

class SuggestedHashtags extends React.Component {
    getHashes(tags) {
        return tags.map((tag, key) => {
            return (
                <Typography
                    className={styles.typography}
                    key={key}
                    onClick={() => this.props.onClick(tag)}
                    size={"bodyTextNormal"}
                >
                    {`#${tag}`}
                </Typography>
            );
        });
    }
    render() {
        const length = Math.ceil(this.props.hashtags.length / COLUMNS);
        const right = this.getHashes(this.props.hashtags.slice(0, length));
        const left = this.getHashes(this.props.hashtags.slice(length));

        return (
            <div className={this.props.className}>
                <SectionHeader title={"Populære tags"} />
                <Wrapper
                    className={styles.wrapper}
                    size={"side-bottom"}
                >
                    <div className={styles.columnLeft}>
                        {right}
                    </div>
                    <div className={styles.column}>
                        {left}
                    </div>
                </Wrapper>
            </div>
        );
    }
}

SuggestedHashtags.displayName = "Suggested Hashtags";
SuggestedHashtags.propTypes = {
    className: React.PropTypes.string,
    hashtags: React.PropTypes.arrayOf(React.PropTypes.string),
    onClick: React.PropTypes.func
};

export default SuggestedHashtags;
