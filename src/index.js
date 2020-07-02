import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.scss';
import Footer from "./components/Footer";


ReactDOM.render(
    <Provider store={store}>
        <HomePage />,
        <Footer/>
    </Provider>,
    document.getElementById('root')
);
