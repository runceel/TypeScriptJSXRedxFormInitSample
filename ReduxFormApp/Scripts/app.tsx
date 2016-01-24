import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import {Provider} from 'react-redux';
import IndexPage from './components/IndexPage';
import * as rootReducers from './reducers/rootReducers';

const store = Redux.createStore(rootReducers.rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <IndexPage />
    </Provider>,
    document.getElementById('content'));
