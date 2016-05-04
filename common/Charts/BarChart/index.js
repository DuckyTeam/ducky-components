import React from "react";
import Graph from "./../d3/Graph";

import {scale, draw} from "./../d3/simpleBarChart";

class BarChart extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.data.title
                    ? (
                    <h2 style={{textAlign: "Center"}}>
                        {this.props.data.title}
                    </h2>
                ) : null}
                <Graph
                    data={this.props.data}
                    domain={{x: [0,10], y: [0, 5]}}
                    draw={draw}
                    height={300}
                    scale={scale}
                    width={200}
                />
            </div>
        );
    }
}
const PropTypes = React.PropTypes;

BarChart.displayName = "BarChart";
BarChart.propTypes = {
    data: PropTypes.shape({
        stats: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number.isRequired,
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.boolean]).isRequired
        })).isRequired,
        title: PropTypes.string
    }).isRequired,
    height: PropTypes.number,
    id: PropTypes.string,
    increment: PropTypes.number
};

export default BarChart;