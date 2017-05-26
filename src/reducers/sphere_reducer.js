import { NEW_SPHERE, TIME, TIME_START, TIME_STOP, RESIZE } from '../actions';
import { RADIUS, MC2, INIT_STATE } from '../constants';

const randomAngleCos = () => {
    return Math.cos(Math.floor((Math.random() * 36) + 1) * 10); // cos of 10 - 360 angle
};
const randomAxis = () => {
    return Math.floor(Math.floor((Math.random() * 10) + 1) * randomAngleCos() * 1000) / 1000;
};
const randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};

export default (state = INIT_STATE, action) => {
    let spheres;

    switch (action.type) {
        case NEW_SPHERE:
            spheres = state.spheres.slice(0);

            const vector = {
                x: randomAxis(),
                y: randomAxis()
            };

            spheres.push({
                x: action.x,
                y: action.y,
                r: RADIUS,
                id: state.id,
                vector: vector,
                color: randomColor(),
                mc2: MC2
            });

            return Object.assign({}, state, {
                spheres: spheres,
                id: state.id + 1
            });
        case  TIME:
            spheres = state
                .spheres
                .slice(0)
                .map((s) => {
                    let sphr = Object.assign({}, s, {
                        x: s.x + s.vector.x * s.mc2,
                        y: s.y + s.vector.y * s.mc2
                    });

                    if (sphr.x < RADIUS || sphr.x > (state.width - RADIUS)) {
                        sphr.vector.x = sphr.vector.x * (-1);
                    }
                    if (sphr.y < RADIUS || sphr.y > (state.height - RADIUS)) {
                        sphr.vector.y = sphr.vector.y * (-1);
                    }

                    if (sphr.mc2 < 1 || sphr.y > (state.height - RADIUS)) {
                        if (sphr.mc2 <= 0) {
                            sphr.vector.x = 0;
                            sphr.vector.y = 0;
                        } else {
                            sphr.mc2 = sphr.mc2 - 0.01;
                        }
                    }

                    return sphr;
                });

            const stopTimer = spheres.filter((s) => {return s.mc2 > 0;}).length < 1;

            return Object.assign({}, state, {
                spheres: spheres,
                id: state.id,
                timer: stopTimer ? clearInterval(state.timer) : state.timer
            });
        case  RESIZE:
            return Object.assign({}, state, {
                width: action.width,
                height: action.height
            });
        case  TIME_START:
            return Object.assign({}, state, {
                timer: action.timer
            });
        case  TIME_STOP:
            if (state.timer) {
                clearInterval(state.timer);
                return Object.assign({}, state, {
                    timer: null
                });
            }
            break;
        default:
            break;
    }

    return state;
};