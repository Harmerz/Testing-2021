import {
    NavLink,
    Switch,
    Route,
    useRouteMatch,
    Redirect,
} from 'react-router-dom';
import { NotFound } from '../404'; // Because '../_listing' causes a circular dependency issue

// import { ReactComponent as GoIcon } from '../../assets/icons/go.svg';
import { TabbedNav } from '../../components/TabbedNav';
import { AgendaDetails } from './page';

// import agendaData from '../../resources/daftar-agenda.yaml';
import agendaData from '../../resources/daftar-agenda.json';
import { GenericPage, PageTitle } from '../../components/GenericPage';
import { AgendaItemCard } from '../../components/AgendaItemCard';

function DayLink({ day, children }) {
    const { url } = useRouteMatch();
    return (
        <NavLink
            to={`${url}/hari-${day}`}
            /* className='py-2 px-4 font-display-sm rounded-lg transition-colors duration-100'/* activeClassName='bg-accent-yellow-dark hover:bg-accent-yellow-dark' */
        >
            {children}
        </NavLink>
    );
}

// function TestItemTemp({ time, title, excerpt, slug }) {
// }

export function Agenda() {
    const { url, path } = useRouteMatch();
    // console.log(agendaData);
    return (
        <Switch>
            <Route
                path={`${path}/hari-:hariNum/:slug`}
                component={AgendaDetails}
            />
            <Route>
                {/* TODO: Use a common "Page" element instead to uniformify the padding and stuff */}
                <GenericPage className='flex flex-col items-center'>
                    <PageTitle>Agenda</PageTitle>
                    <TabbedNav className='mb-8'>
                        <DayLink day={1}>Hari 1</DayLink>
                        <DayLink day={2}>Hari 2</DayLink>
                        <DayLink day={3}>Hari 3</DayLink>
                        <DayLink day={4}>Hari 4</DayLink>
                    </TabbedNav>
                    <Switch>
                        {/* <Route path={`${path}/hari-1`}>
                            <TestItemTemp
                                time={{ start: '07.00', end: '09.00' }}
                                title='hello, world!'
                                excerpt='hahaha huhu lorem ibsum'
                                slug='ppks'
                            />
                        </Route>
                        <Route path={`${path}/hari-2`}>Hari 2</Route> */}
                        {Object.keys(agendaData).map((hari) => (
                            <Route path={`${path}/${hari}`}>
                                <div
                                    key={hari}
                                    className='w-full max-w-screen-lg'
                                    style={{
                                        animation:
                                            'test-appear-up-anim 0.5s cubic-bezier(0, 1, 1, 1)',
                                    }}
                                >
                                    {agendaData[hari].map((item) => (
                                        <AgendaItemCard
                                            // time={{ start: item.mulai, end: item.selesai }}
                                            time={item.waktu} // .replace() here instead?
                                            title={item.judul}
                                            excerpt={item.deskripsi}
                                            slug={item.slug}
                                            inactive={item.inactive}
                                        />
                                    ))}
                                </div>
                            </Route>
                        ))}
                        <Redirect exact from={url} to={`${path}/hari-1`} />

                        {/* TODO: Define this 404 somewhere else instead to make it show "full page" */}
                        <Route component={NotFound} />
                    </Switch>
                </GenericPage>
            </Route>
            {/* <Route component={NotFound} /> */}
        </Switch>
    );
}
