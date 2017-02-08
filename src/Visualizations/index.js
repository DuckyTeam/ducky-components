import React from 'react';

class Visualization extends React.Component {
    constructor() {
        super();
        this.container = null;
    }
    componentDidMount() {
        this.props.viz.create(this.container, this.getChartState());
    }

    componentDidUpdate() {
        this.props.viz.update(this.container, this.getChartState());
    }

    componentWillUnmount() {
      this.props.viz.destroy(this.props.graphID);
    }

    handleRef = (element) => {
        this.container = element;
    }

    getChartState() {
        return Object.assign({}, this.props, {
          width: this.container.offsetWidth,
          height: this.container.offsetHeight,
          margin: this.margin,
          id: this.props.graphID
        });
    }

    render() {
        return (
            <div
                className={this.props.className || "Visualization"}
                id={`visualizationDiv${this.props.id}`}
                ref={this.handleRef}
                style={{height: this.props.height}}
            >
            </div>
        );
    }
}

export default Visualization;
