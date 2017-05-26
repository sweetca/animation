import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { select as d3_select, mouse as d3_mouse } from 'd3';

import { newSphere, timeTick, timeStart } from '../actions/index';
import './Game.css';
import Spheres from '../components/Spheres';
import { FPS } from '../constants';

class Game extends Component {

    componentDidMount() {
        const svg = d3_select(this.refs.svg);

        svg.on('click', () => {
            const [x, y] = d3_mouse(this.refs.svg);
            this.props.newSphere(x, y);

            if (!this.props.timer){
                const timer = setInterval(() => this.props.timeTick(), FPS);
                this.props.timeStart(timer);
            }
        });
    }

    render() {
        return (
            <div className="Game">
                <svg width={this.props.width} height={this.props.height} ref="svg">
                    <Spheres spheres={this.props.spheres} />
                </svg>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        spheres: state.data.spheres,
        timer: state.data.timer,
        width: state.data.width,
        height: state.data.height
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { newSphere, timeTick, timeStart },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);