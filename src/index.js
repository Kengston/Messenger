import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContex";

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App state={state}/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});

serviceWorker.unregister();
