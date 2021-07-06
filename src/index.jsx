import { Component, isValidElement } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";

import { routes, customRoutes } from "./routes";

import "./index.css";

// const pathCount = (arr: string) => arr.split('/').length;

// console.log()

function Main() {
    // console.log(Object.entries(routes).sort(([pathA], [pathB]) => pathCount(pathA) - pathCount(pathB)));
    console.log(Object.entries(routes).sort(([a],[b]) => b.length - a.length))
    const a = new Route({path: ""});
    return (
        <BrowserRouter>
            <Switch>
                {/* {routes
                    .sort((a, b) => pathCount(a.path) - pathCount(b.path))
                    .map(routeProps => (
                        <Route key={routeProps.path} {...routeProps} />
                    ))
                } */}
                {Object.entries(routes)
                    // .sort(([pathA], [pathB]) => pathCount(pathB) - pathCount(pathA))
                    .sort(([pathA], [pathB]) => pathB.length - pathA.length) // So that the more specific paths get matched first
                    // .map(([path, value]) => {
                    //     // if (value instanceof Route.prototype.props.component) {}
                    //     if (!isValidElement(value)) {
                    //         return <Route />;
                    //     }
                    //     return <Route key={path} path={path} component={value as JSX.Element} />
                    // })
                    .map(([path, Component]) => (
                        <Route key={path} path={path} component={Component} />
                    ))
                }

                {/* For routes overrides */}
                {/* {routeOverrides.sort((a, b) => b.path.length - a.path.length).map(routeProps => (
                    <Route key={routeProps.path} {...routeProps} />
                ))} */}
                {/* <Route path="/agenda" */}
                {customRoutes}
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Main />, document.getElementById("content"));
