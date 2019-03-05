// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { store } from './store/configureStore.js';
import './styles/app.scss';

ReactDOM.render(
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <App/>  
            </BrowserRouter>
        </Provider>
    </div>,
    document.getElementById("root")
);
