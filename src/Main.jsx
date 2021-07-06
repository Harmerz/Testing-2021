// function RoutesHandling() {
//     const { url } = useRouteMatch();
//     const { path } = useParams();

//     // console.log(path, url);
//     console.log(path);

//     // const RenderedPageComponent = lazy(() => import(`./pages/${path || "DummyPage"}`));
//     const RenderedPageComponent = require(`./pages/${path || "DummyPage"}`).default;

//     return (<>
//         <p>{path}</p>
//         <p>{url}</p>
//         {/* <Route path="/:path" component={RoutesHandling} /> */}
//         <RenderedPageComponent />
//     </>
//     );
// }

// export default function Main() {
// //     const { path } = useParams();

// // console.log(path);
//     return (
//         <BrowserRouter>
//             <Switch>
//                 {/* <Route path="/" exact component={null} /> */}

//                 {/* Testing route for testing purposes only */}
//                 {/* <Route path="/agenda" component={AgendaIndexPage} /> */}

//                 {/* <Route path="/:path" component={lazy(() => import())} */}

//                 <Route path="/:path*" component={RoutesHandling} />                
//                 {/* <Route component={DummyPage} /> */}
//             </Switch>
//         </BrowserRouter>
//     );
// }