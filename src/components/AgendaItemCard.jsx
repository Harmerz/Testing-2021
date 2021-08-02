/* eslint-disable */
import { Link, useRouteMatch } from 'react-router-dom';

import { ReactComponent as GoIcon } from '../assets/icons/go.svg';

export function AgendaItemCard({ time, title, excerpt, slug, inactive }) {
    const { url } = useRouteMatch();

    const wrapperClassNames = 'mb-4';

    const cardDisplay = (
        <article
            className={`flex bordered-card items-center border-accent-blue-dark shadow-md group-hover:shadow-lg transition px-8 py-4 group-hover:bg-accent-blue group-hover:bg-opacity-10 duration-500 rounded-xl ${
                inactive ? wrapperClassNames : ''
            }`}
            {...(inactive
                ? { title: 'Materi belum ada atau belum dibuka' }
                : {})
            }
        >
            <div className='flex flex-col md:flex-row items-start md:items-center mr-auto'>
                <p className='px-2 py-0.5 bg-accent-blue-dark text-white font-display font-bold leading-none mb-2 md:mb-0 md:mr-8 text-sm md:text-base flex-shrink-0'>
                    {time.replace('-', '\u2013')}{' '}
                    <span className='text-xs'>WIB</span>
                </p>
                <div>
                    <p className='font-display font-bold text-xl'>{title}</p>
                    <p className='font-display-sm text-sm'>{excerpt}</p>
                </div>
            </div>
            {!inactive && (
                <div className='flex self-stretch items-center justify-center w-16 -mr-7 -my-3 text-black bg-gray-lighter group-hover:bg-accent-blue group-hover:text-white transition-colors duration-100 rounded-r-lg ml-8'>
                    <GoIcon className='block h-6 w-auto fill-current' />
                </div>
            )}
        </article>
    );

    if (inactive) {
        return cardDisplay;
    }

    return (
        <Link
            to={`${url}/${slug}`}
            className={`block group active:transform active:translate-y-0.5 transition-transform ${wrapperClassNames}`}
        >
            {cardDisplay}
        </Link>
    );
}
