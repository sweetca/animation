import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { select as d3_select } from 'd3';

import './index.css';
import createStore from './store';
import reducers from './reducers';
import App from './components/App';
import { resize } from './actions';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

const onResize = () => {
    store.dispatch(resize(window.innerWidth, window.innerHeight));
};
onResize();

d3_select(window).on('resize', onResize);