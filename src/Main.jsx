import { StrictMode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// This didn't work due to the ordering clash with the supposed tailwind (at rules / layers) ordering
// import './styles/base.scss';
// import './styles/main.css';

import './styles/main.scss';

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

import * as pages from './pages/_listing';

function Main() {
    return (
        <BrowserRouter>
            {/* Act as the <body> element */}
            <div className='flex flex-col min-h-screen'>
                <PageHeader className='flex-shrink-0' />

                {/* Act as the <main> element */}
                <div className='flex-grow'>
                    <Switch>
                        {/* eslint-disable */}
                        <Route exact path='/' component={pages.HomePage} />
                        <Route
                            exact
                            path='/agenda-testing'
                            component={pages.Agenda}
                        />
                        <Route
                            exact
                            path='/webcomic'
                            component={pages.WebcomicIndexPage}
                        />
                        <Route
                            exact
                            path='/jalan-teknik'
                            component={pages.JalanTeknik}
                        />
                        <Route
                            exact
                            path='/jalan-teknik/:path'
                            component={pages.ItemJalanTeknik}
                        />
                        <Route
                            exact
                            path='/jalan-teknik/:path/360'
                            component={pages.ThreeSixty}
                        />
                        <Route
                            exact
                            path='/presensi/:type/:cluster'
                            component={pages.PresensiIndexPage}
                        />
                        {/* eslint-enable */}
                    </Switch>
                </div>
                <PageFooter className='flex-shrink-0' />
            </div>
        </BrowserRouter>
    );
}

export const renderedComponent = (
    <StrictMode>
        <Main />
    </StrictMode>
);
