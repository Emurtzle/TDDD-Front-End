import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader'
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
    google: {
        families: ['Roboto:300,400,500']
    }
})

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
