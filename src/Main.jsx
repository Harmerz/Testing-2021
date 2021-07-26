import { StrictMode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/base.scss';
import './styles/main.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import * as pages from './pages/_listing';

function Main() {
    return (
        <BrowserRouter>
            {/* Act as the <body> element */}
            <div className='flex flex-col min-h-screen'>
                <Header className='flex-shrink-0' />

                {/* Act as the <main> element */}
                <div className='flex-grow'>
                    <Switch>
                        {/* eslint-disable */}
                        <Route path='/' component={pages.HomePage} />
                        {/* <Route path='/agenda-testing' component={pages.Agenda} />
                        <Route path='/webcomic'       component={pages.WebcomicIndexPage} />
                        <Route
                            path='/jalan-teknik'
                            exact
                            component={pages.JalanTeknik}
                        />
                        <Route
                            path='/jalan-teknik/:path'
                            exact
                            component={pages.ItemJalanTeknik}
                        />
                        <Route
                            path='/jalan-teknik/:path/360'
                            component={pages.ThreeSixty}
                        /> */}
                        {/* eslint-enable */}
                    </Switch>
                </div>
                <Footer className='flex-shrink-0' />
            </div>
        </BrowserRouter>
    );
}

export const renderedComponent = (
    <StrictMode>
        <Main />
    </StrictMode>
);
