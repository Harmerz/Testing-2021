// Forcibly remove the inherited styles from the WP theme
import './utils/wp-styles-fix';

import { StrictMode, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    useLocation,
    useHistory
} from 'react-router-dom';

import './styles/main.scss';

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

import * as pages from './pages/_listing';
import { ScrollToTop } from './utils/ScrollToTop';

function Main() {
    const { pathname } = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (pathname.endsWith('/')) {
            history.replace(pathname.slice(0, -1));
        }
    }, []);

    return (
        <BrowserRouter>
            <ScrollToTop />

            <div className='flex flex-col min-h-screen'>
                <PageHeader className='flex-shrink-0' />

                <main className='flex-grow flex flex-col'>
                    <Switch>
                        <Route exact path='/' component={pages.Home} />
                        <Route
                            exact
                            path='/penugasan'
                            component={pages.Penugasan}
                        />
                        <Route path='/agenda' component={pages.Agenda} />
                        <Route
                            path='/dokumentasi'
                            component={pages.Dokumentasi}
                        />
                        <Route
                            exact
                            path='/presensi/:type/:cluster'
                            component={pages.PresensiIndexPage}
                        />

                        {/* The 404 page */}
                        <Route component={pages.NotFound} />
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
