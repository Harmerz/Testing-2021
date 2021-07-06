import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './main.css';

// import {
//     DummyUnderConstructionsPage,
//     Agenda
// } from './pages/_listing';
import * as pages from './pages/_listing';

function Main() {
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
