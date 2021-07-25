import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/base.scss';
import './styles/main.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import * as pages from './pages/_listing';

export function Main() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                {/* eslint-disable */}
                <Route exact path='/' component={pages.HomePage} />
                <Route path='/agenda-testing' component={pages.Agenda} />
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
                />
                {/* eslint-enable */}
            </Switch>

            <Footer />
        </BrowserRouter>
    );
}
