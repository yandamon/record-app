import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore, addRecord} from './playground/redux'
import Page from './Actions/mainpage'



const store=configureStore();

store.dispatch(addRecord({detail:'axx',note:'solo killed',date:201808}))
store.dispatch(addRecord({detail:'axx',note:'solo killed',date:201808}))
store.dispatch(addRecord({detail:'axx',note:'solo killed',date:201808}))
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <Page />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'));
