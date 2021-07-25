import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/base.scss';
import './styles/main.css';

import * as pages from './pages/_listing';

export function Main() {
    return (
        <BrowserRouter>
            <Switch>
                {/* eslint-disable */}
                <Route exact path='/agenda-testing' component={pages.Agenda} />
                <Route exact path='/webcomic'       component={pages.WebcomicIndexPage} />
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
                <Route component={pages.ComingSoon} />
                {/* eslint-enable */}
            </Switch>
        </BrowserRouter>
    );
}
