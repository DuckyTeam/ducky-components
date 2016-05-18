import graph from "./../simpleBarChart";
import React from "react";

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.graph = graph;
        this.graph.draw = this.props.draw;
        this.graph.scale = this.props.scale;
    }

    componentDidMount() {
        this.graph.create(this.getDOMNode(), this.props);
    }

    componentDidUpdate() {
        this.graph.update(this.getDOMNode(), this.props);
    }

    componentWillUnmount() {
        this.graph.destroy(this.getDOMNode());
    }

    render() {
        return (
            <div></div>
        );
    }
}
const PropTypes = React.PropTypes;

Graph.displayName = "Graph";
Graph.propTypes = {
    draw: PropTypes.func.isRequired,
    scale: PropTypes.func.isRequired
};

export default Graph;
