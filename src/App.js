import React from 'react';
import {Provider} from 'react-redux';
import Router from './Router';
import store from './Store';
import stylesheet from './App.css';

let App = () => 
    <Provider store={store}>
        <Router />
    </Provider>


export default App;