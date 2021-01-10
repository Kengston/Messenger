import * as serviceWorker from './serviceWorker';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <Suspense fallback={<Preloader />}>
                        <App state={state}/>
                    </Suspense>
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
 