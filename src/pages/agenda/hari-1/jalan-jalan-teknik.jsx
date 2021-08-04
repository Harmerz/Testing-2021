import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ItemJalanTeknik } from '../../item-jalan-teknik';
// import { JalanTeknik } from "../../jalan-teknik";
import { Map } from '../../jalan-teknik/Map';
import { ThreeSix } from '../../ThreeSix';

export const title = '[WIP] Jalan-Jalan Teknik';

function Content() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:path/360`} component={ThreeSix} />
            <Route path={`${path}/:path`} component={ItemJalanTeknik} />
            <Route path={path} component={Map} />
        </Switch>
    );
}

export const content = <Content />;
