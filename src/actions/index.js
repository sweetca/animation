const NEW_SPHERE = 'NEW_SPHERE';
const TIME = 'TIME';
const TIME_START = 'TIME_START';
const TIME_STOP = 'TIME_STOP';
const RESIZE = 'RESIZE';

const timeTick = () => {
    return {
        type: TIME
    };
};

const timeStart = (timer) => {
    return {
        type: TIME_START,
        timer: timer
    };
};

const timeStop = () => {
    return {
        type: TIME_STOP
    };
};

const newSphere = (x, y) => {
    return {
        type: NEW_SPHERE,
        x: x,
        y: y
    };
};

const resize = (width, height) => {
    return {
        type: RESIZE,
        width: width,
        height: height
    };
};


export { NEW_SPHERE, TIME, TIME_START, TIME_STOP, RESIZE, timeTick, timeStart, timeStop, newSphere, resize };

