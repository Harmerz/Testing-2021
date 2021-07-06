import { BrowserRouter, Switch, Route } from "react-router-dom";

import { DummyPage, AgendaIndexPage } from "./pages";

export default function Main() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={null} /> */}

                {/* Testing route for testing purposes only */}
                <Route path="/agenda" exact component={AgendaIndexPage} />

                <Route component={DummyPage} />
            </Switch>
        </BrowserRouter>
    );
}
