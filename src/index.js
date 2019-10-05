import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from './serviceWorker';
import Home from './components/Auth/Home'

//<Provider store={store}><App /></Provider>
ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
