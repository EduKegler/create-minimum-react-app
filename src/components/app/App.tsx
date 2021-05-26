import React from 'react';
import logo from '../../assets/images/logo.svg';

import './app.scss';

interface AppProps {
    linkMessage: string;
}

const App = ({ linkMessage }: AppProps) => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>Edit <code>src/components/app/App.ts</code> and save to reload.</p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >{linkMessage}</a>
                {process.env.REACT_APP_EXAMPLE}
            </header>
        </div>);
};

export default App;