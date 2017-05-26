import { combineReducers } from 'redux';
import SphereReducer from './sphere_reducer';

const rootReducer = combineReducers({
    data: SphereReducer
});

export default rootReducer;