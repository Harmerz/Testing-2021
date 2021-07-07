import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './main.css';

// import {
//     DummyUnderConstructionsPage,
//     Agenda
// } from './pages/_listing';
import * as pages from './pages/_listing';
import { useEffect } from 'react';

function Main() {
    // FIXME
    useEffect(() => {
        document.title = "Coming Soon — PPSMB Kesatria 2021";
    }, []);
    
    return (
        <BrowserRouter>
            {/* prettier-ignore */}
            <Switch>
                {/* eslint-disable */}
                <Route exact path='/agenda' component={pages.Agenda} />
                <Route                      component={pages.ComingSoon} />
                {/* eslint-enable */}
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById('content'));
