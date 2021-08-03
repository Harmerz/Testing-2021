// Forcibly remove the inherited styles from the WP theme
import './utils/wp-styles-fix';

import { StrictMode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/main.scss';

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

import * as pages from './pages/_listing';

// function RedirectRoute({ path, exact, target }) {
//     return (
//         <Route exact={exact} path={path}>
//             <Redirect to={target} />
//         </Route>
//     );
// }

function Main() {
    return (
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
                <PageHeader className='flex-shrink-0' />

                <main className='flex-grow flex flex-col'>
                    <Switch>
                        {/* eslint-disable */}
                        {/*<Route path='/' component={pages.HomePage} />*/}
                        {/* <Route path= */}
                        {/* <Route path='/agenda-testing' component={pages.Agenda} />
                        <Route path='/webcomic'       component={pages.WebcomicIndexPage} />
                        <Route exact path='/' component={pages.Home} />
                        <Route path='/agenda' component={pages.Agenda} />

                        {/* The 404 page */}
                        <Route component={pages.NotFound} />

                        <Route
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
                        <Route path='/dokumentasi' component={pages.Dokumentasi} />
                    </Switch>
                </main>
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
