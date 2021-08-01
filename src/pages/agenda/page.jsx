import { Link, useParams } from 'react-router-dom';
import { GenericPage, PageTitle } from '../../components/GenericPage';
import { NotFound } from '../404';
import { ReactComponent as GoIcon } from '../../assets/icons/go.svg';

import styles from '../../styles/agenda-details-page.module.css';

import agendaIndex from '../../resources/daftar-agenda.json';

// function PageNavigationButton({ targetSlug, children: text, reverseIcon }) {
//     return (
//         <Link to={`/agenda/${sumthn.hari}/${sumthn.slug/* OR */targetSlug}`} className={`flex ${reverseIcon ? 'flex-row-reverse' : 'flex-row'}`}>
//             <div className='px-4 py-2 leading-none'>{text}</div>
//             <div>
//                 <GoIcon className='block' />
//             </div>
//         </Link>
//     );
// }

function Page({ title, children }) {
    return (
        <GenericPage customComponent='article'>
            <PageTitle className='text-white bg-accent-blue-dark max-w-max mx-auto px-6 py-2.5 rounded-xl ring-2 ring-offset-4 ring-accent-blue-dark mb-8'>
                {title}
            </PageTitle>
            <div>{children}</div>

            {/* <div className='flex justify-between'>
                <PageNavigationButton targetSlug=''>
                    Sebelumnya
                </PageNavigationButton>
            </div> */}
        </GenericPage>

    );
}

export function AgendaDetails() {
    const { hariNum, slug } = useParams();
    try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const page =  require(`./hari-${hariNum}/${slug}`);

        return (
            <Page title={page.title}>
                {page.content}
            </Page>
        );
    } catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            return <NotFound />;
        }
        throw err;
    }
}
