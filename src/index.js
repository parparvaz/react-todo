import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App/App";
import {createStore} from "redux";
import indexReducer from "./App/Reducer/indexReducer";
import {Provider} from "react-redux";

const store = createStore(indexReducer)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)