import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';

import {setUpStore} from "./redux";
import App from './App';

const store = setUpStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

