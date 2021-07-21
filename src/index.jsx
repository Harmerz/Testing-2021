import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './main.css';

import * as pages from './pages/_listing';

function Main() {
    // FIXME
    useEffect(() => {
        document.title = 'Coming Soon — PPSMB Kesatria 2021';
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                {/* eslint-disable */}
                <Route exact path='/agenda-testing' component={pages.Agenda} />
                <Route exact path='/' component={pages.ComingSoon} />
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
                />
                {/* eslint-enable */}
            </Switch>
        </BrowserRouter>
    );
}

// TEMPORARY
if (!window.location.pathname.startsWith('/agenda/hari-')) {
    ReactDOM.render(<Main />, document.getElementById('content'));
}
