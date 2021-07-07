import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './main.css';

import * as pages from './pages/_listing';

function Main() {
    // FIXME
    useEffect(() => {
        document.title = "Coming Soon — PPSMB Kesatria 2021";
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                {/* eslint-disable */}
                <Route exact path='/agenda-testing' component={pages.Agenda} />
                <Route                              component={pages.ComingSoon} />
                {/* eslint-enable */}
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById('content'));
