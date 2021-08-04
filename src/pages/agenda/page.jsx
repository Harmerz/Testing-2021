import { Link, useParams } from 'react-router-dom';
import { GenericPage, PageTitle } from '../../components/GenericPage';
import { NotFound } from '../404';
import { ReactComponent as GoIcon } from '../../assets/icons/go.svg';

import agendaList from '../../resources/daftar-agenda.json';

import { ReactComponent as BulletedListIcon } from '../../assets/icons/list-ul.svg';
import { cnJoin } from '../../utils/classnames-joiner';
import { ButtonToGform } from '../../components/presensi';

function NavigateButton({ targetItem, children, reverseIcon, className }) {
    const isEnabled = targetItem && !targetItem.inactive;
    // console.log(targetItem);

    return (
        <Link
            to={
                isEnabled
                    ? `/agenda/${targetItem.hari}/${targetItem.slug}`
                    : undefined
            }
            className={`flex ${reverseIcon ? 'flex-row-reverse' : 'flex-row'} ${
                isEnabled ? 'visible' : 'invisible'
            } bg-accent-yellow-dark text-white rounded-md ring-1 ring-offset-2 ring-accent-yellow-dark ring-opacity-0 hover:ring-opacity-100 transition-shadow duration-100 overflow-hidden ${className}`}
        >
            <div className='px-4 py-2 flex items-center'>
                <span className='block leading-none font-display font-semibold uppercase'>
                    {children}
                </span>
            </div>
            <div className='bg-accent-blue-dark px-3.5 py-2'>
                <GoIcon
                    className={`block fill-current h-6 w-auto${
                        reverseIcon ? ' transform -scale-x-1' : ''
                    }`}
                />
            </div>
        </Link>
    );
}

function Page({
    title,
    children,
    currentSlug,
    hariNum,
    attendanceCheckType,
}) {
    const slugsCollection = Object.entries(agendaList)
        .map(([hari, items]) => items.map((item) => ({ ...item, hari })))
        .flat();

    const currentPageIndex = slugsCollection.findIndex(
        (item) => item.slug === currentSlug
    );
    const previousItem = slugsCollection[currentPageIndex - 1];
    const nextItem = slugsCollection[currentPageIndex + 1];

    // console.log(slugsCollection);

    const ToPrevious = ({ className }) => (
        <NavigateButton
            targetItemObj={previousItem}
            reverseIcon
            className={className}
        >
            Sebelumnya
        </NavigateButton>
    );
    const ToNext = ({ className }) => (
        <NavigateButton targetItemObj={nextItem} className={className}>
            Selanjutnya
        </NavigateButton>
    );

    return (
        <GenericPage customComponent='article'>
            <Link
                to={`/agenda/hari-${hariNum}`}
                className={cnJoin([
                    'text-center',
                    'bg-gray-lighter',
                    'max-w-max',
                    'mx-auto',
                    'px-3',
                    'py-1',
                    'mb-6',
                    'rounded-md',
                    'font-display',
                    'flex',
                    'items-center',
                    'text-accent-blue-dark',
                    'hover:bg-gray-darker',
                    'transition',
                    'active:filter',
                    'active:brightness-90',
                ])}
            >
                <BulletedListIcon className='block h-4 w-auto mr-2 fill-current' />
                <span className='block text-sm'>Kembali ke daftar agenda</span>
            </Link>
            <div className='flex mb-10 lg:mb-12 justify-between items-center'>
                <PageTitle
                    className='text-white bg-accent-blue-dark px-6 py-2.5 rounded-xl ring-2 ring-offset-4 ring-accent-blue-dark order-2 mb-0 mx-auto'
                    noMB
                >
                    {title}
                </PageTitle>
                <ToPrevious className='order-1 hidden lg:flex' />
                <ToNext className='order-3 hidden lg:flex' />
            </div>
            <div>{children}</div>
            <div className='flex justify-between mt-12'>
                <ToPrevious className='mr-auto lg:hidden' />
                {attendanceCheckType && (
                    <ButtonToGform
                        position='bottom'
                        type={attendanceCheckType}
                        className='mx-auto'
                    />
                )}
                <ToNext className='ml-auto lg:hidden' />
            </div>
        </GenericPage>
    );
}

export function AgendaDetails() {
    const { hariNum, slug } = useParams();
    try {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const page = require(`./hari-${hariNum}/${slug}`);

        return (
            <Page
                title={page.title}
                currentSlug={slug}
                hariNum={hariNum}
                attendanceCheckType={page.attendanceCheckType}
            >
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
