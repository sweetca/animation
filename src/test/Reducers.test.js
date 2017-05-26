import SphereReducer from '../reducers/sphere_reducer';
import { INIT_STATE } from '../constants';

describe('Sphere Reducer', () => {

    it('should return the initial state', () => {
        expect(
            SphereReducer(undefined, {})
        ).toEqual(INIT_STATE);
    });
});