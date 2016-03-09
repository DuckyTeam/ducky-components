import IcoW01 from '../IconAvaWrapper';
import React from 'react';
import Wra16A from '../Wrapper';
import styles from './MaMeF10.css';

class MaMeF10 extends React.Component {
    render() {
        return (
            <Wra16A className={styles.wrapper}
                size={"standard"}
            >
                <textArea className={styles.textArea}
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

MaMeF10.displayName = "MaMeF10";
MaMeF10.propTypes = {
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    prompt: React.PropTypes.string
};
export default MaMeF10;
