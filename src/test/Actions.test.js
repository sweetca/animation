import {
    NEW_SPHERE,RESIZE, newSphere, resize
} from '../actions';

describe('Action', () => {

    it('RESIZE', () => {
        const w = 100;
        const h = 1000;
        const expectedAction = {
            type: RESIZE,
            width: w,
            height: h
        };
        expect(resize(w, h)).toEqual(expectedAction);
    });

    it('NEW_SPHERE', () => {
        const x = 10;
        const y = 20;
        const expectedAction = {
            type: NEW_SPHERE,
            x: x,
            y: y
        };
        expect(newSphere(x, y)).toEqual(expectedAction);
    });
});