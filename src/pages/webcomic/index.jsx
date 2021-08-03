import { useState } from 'react';
import { NavigationButton } from './NavigationButton';
import { Comic } from './Comic';
import { Timer } from './Timer';
import { PortraitWarning } from './PortraitWarning';
import { PresenceNavigationButton } from './PresenceNavigationButton';
import { PresensiTugmat } from '../../components/presensi';

export function WebcomicIndexPage() {
    const [imageCount] = useState(10); // 1 to 10 // 0 is cover
    const [openedPage, setOpenedPage] = useState(0); // begin from 0 // cover
    const [progresses, setProgresses] = useState(
        Object.fromEntries(
            [[0, 100]].concat(
                Array.from(Array(imageCount), (_, index) => index + 1).map(
                    (i) => [i, 0]
                )
            )
        )
    );
    const [page, setPage] = useState('comic');

    const navigateToPresencePage = (e) => {
        e.preventDefault();
        setPage('presensi');
    };

    return (
        <div className='webcomic relative w-full h-screen-no-header text-black overflow-hidden'>
            <img
                src='https://ik.imagekit.io/lutfiandri/webcomic-kesatria/background'
                alt='background'
                className='w-full h-full object-cover object-right-bottom fixed'
            />
            <div
                className={`h-full w-full transform duration-500 ease-in-out ${
                    page === 'presensi' ? '-translate-y-full' : ''
                }`}
            >
                <div className='px-4 md:px-8 lg:px-12 py-4 lg:py-8 h-full flex flex-col object-container z-20 relative'>
                    {/* <div className='text-center mb-2 hidden lg:block'>
                        <h1 className='font-medium text-4xl'>
                            WEBCOMIC: MENTAL HEALTH
                        </h1>
                    </div> */}
                    <div className='flex-grow flex flex-row'>
                        <div className='grid place-items-center'>
                            <NavigationButton
                                openedPage={openedPage}
                                setOpenedPage={setOpenedPage}
                                imageCount={imageCount}
                                prev
                            />
                        </div>
                        <div className='flex-grow flex flex-col mx-4 shadow-lg'>
                            <div style={{ background: '#FAFAFA' }}>
                                <Timer
                                    openedPage={openedPage}
                                    progresses={progresses}
                                    setProgresses={setProgresses}
                                />
                            </div>
                            <div
                                className='flex-grow p-2 md:p-4'
                                style={{ background: '#FAFAFA' }}
                            >
                                <Comic
                                    openedPage={openedPage}
                                    imageCount={imageCount}
                                />
                            </div>
                        </div>
                        <div className='grid place-items-center'>
                            <NavigationButton
                                openedPage={openedPage}
                                setOpenedPage={setOpenedPage}
                                imageCount={imageCount}
                                progress={progresses[openedPage]}
                                next
                            />
                        </div>
                    </div>
                    <div className='mt-2 text-center text-xl hidden lg:block'>
                        PAGE {openedPage}/10
                    </div>
                    <PresenceNavigationButton
                        progress={progresses[imageCount]}
                        onClick={navigateToPresencePage}
                    />
                </div>
                <PortraitWarning /> {/* z-50 */}
                <div className='px-12 md:px-20 max-w-3xl mx-auto h-screen grid place-items-center object-container z-20'>
                    <PresensiTugmat
                        title='Presensi Mental Health'
                        collection='presensi-mental-health'
                    />
                </div>
            </div>
        </div>
    );
}
