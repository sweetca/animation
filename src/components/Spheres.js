import React, { Component } from 'react';
import Sphere from './Sphere';

class Spheres extends Component {
    render() {
        if (!this.props.spheres || this.props.spheres.length < 1) {
            return (
                <text x="10" y="30" fill="black">Try to click anywhere several times ...</text>
            );
        }
        return (
            <g>
                {this.props.spheres.map((s) => {
                    return (<Sphere {...s} key={s.id} />);
                })}
            </g>
        );
    }
}

export default Spheres;