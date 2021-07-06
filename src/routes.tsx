import { Redirect, Route, RouteProps } from "react-router-dom";

import { DummyUnderConstructionsPage as DummyPage } from "./pages/DummyPage";
import { Agenda } from "./pages/agenda";
import { ReactNode } from "react";

interface RoutesDefinition {
    [path: string]: RouteProps["component"]/* | Omit<RouteProps, "path">*/;
}

export const routes: RoutesDefinition = {
    // "/": DummyPage,

    // Agenda pages
    // "/agenda": {
    //     render: () => <Redirect to="/" /> // (?)
    // },
    "/agenda/someurls": Agenda
};

// customRoutes
// export const routeOverrides: (RouteProps & { path: string })[] = [
//     {
//         path: "/agenda",
//         exact: true,
//         render: () => <Redirect to="/" /> // (?)
//     }
// ]

export const customRoutes: ReactNode[] = [
    <Route exact path="/agenda" render={() => <Redirect to="/#agenda" />} />,
    <Route exact path="/" component={DummyPage} />
];