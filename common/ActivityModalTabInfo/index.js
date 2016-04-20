import React from 'react';
import TabMenu from './../TabMenuIconButtons';
import Typo from './../Typography';
import styles from './styles.css';

class ActivityModalTabInfo extends React.Component {
    render() {
        const icons = [];
        const tabs = this.props.tabs.map((tab) => {
            icons.push(tab.icon);
            return (
                <div>
                    <Typo
                        className={styles.title}
                        type={"bodyTextStrong"}
                    >
                        {tab.title}
                    </Typo>
                    <Typo
                        type={"bodyTextNormal"}
                    >
                        {tab.text}
                    </Typo>
                </div>
            );
        });
        return (
            <TabMenu
                icons={icons}
                onClick={this.props.onClick}
                selected={this.props.selected}
            >
                {tabs}
            </TabMenu>
        );
    }
}

ActivityModalTabInfo.displayName = "Activity Modal - Tab Info";
ActivityModalTabInfo.propTypes = {

};
export default ActivityModalTabInfo;
