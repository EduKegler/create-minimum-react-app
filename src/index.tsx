import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App linkMessage='Learn React' />
    </React.StrictMode>
    , document.getElementById('root'));
