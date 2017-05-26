import React, { Component } from 'react';
import { OPACITY } from '../constants';

class Sphere extends Component {
    render() {
        return (
            <circle cx={this.props.x}
                    cy={this.props.y}
                    fill={this.props.color || 'black'}
                    stroke={this.props.color || 'black'}
                    fillOpacity={OPACITY}
                    r={this.props.r}
            />
        );
    }
}

export default Sphere;