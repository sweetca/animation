import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const middleware = [];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default () => {
    return createStore(
        reducers,
        applyMiddleware(...middleware)
    );
};
