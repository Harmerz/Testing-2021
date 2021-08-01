import { StrictMode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// This didn't work due to the ordering clash with the supposed tailwind (at rules / layers) ordering
// import './styles/base.scss';
// import './styles/main.css';

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

                <div className='flex-grow flex flex-col'>
                    <Switch>
                        <Route exact path='/' component={pages.Home} />

                        {/* <Route path='/agenda/:hari' component={pages.Agenda} /> */}
                        {/* <RedirectRoute path='/agenda' target='/agenda/hari-1' /> */}
                        {/* <Redirect from='/agenda' to='/agenda/hari-1' /> */}
                        {/* <Route path='/agenda' component={pages.Agenda} /> */}

                        <Route path='/temp-ytvid-embed-test'>
                            <iframe
                                width='560'
                                height='315'
                                src='https://www.youtube.com/embed/tFJ9myVginQ'
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        </Route>

                        {/* The 404 page */}
                        <Route component={pages.NotFound} />
                        {/* <Route path= */}
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
