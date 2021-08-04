/* eslint-disable */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { buildingData } from '../../components/Buildings';
import bg from '../../styles/Backdrop.module.css';
import con from '../../styles/Container.module.css';
import { Button } from '../../components/Button';

function toBottom() {
    window.scrollTo({ top: 1080, behavior: 'smooth' });
}

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function ItemJalanTeknik() {
    const { path } = useParams();
    const building = buildingData.find(({ PATH }) => PATH === path);

    useEffect(() => {
        document.title = `${building.NAME}`;
    }, []);

    return (
        <>
            <main className='relative'>
                <main
                    className={`${bg.backdrop} relative font-display w-full bg-contain bg-no-repeat bg-bottom xl:bg-cover  flex flex-col items-center justify-center `}
                >
                    <div className=' w-5/6 md:w-3/4 flex flex-col items-center justify-center'>
                        <div className='relative flex w-full h-810 items-center justify-start'>
                            <Link
                                className={`${
                                    building.ICON === 'hidden'
                                        ? ' '
                                        : 'absolute'
                                } rounded-full left-3 top-3 sm:left-4 sm:top-4 lg:top-6 lg:left-6`}
                                to='/jalan-teknik'
                            >
                                <img
                                    className='h-14 w-14 md:h-24 md:w-24 lg:w-28 lg:h-28 rounded-full transition transform duration-200 ease-in-out hover:-translate-y-2 hover:shadow-buttonSm'
                                    src='/assets/map/back-button.svg'
                                    alt='button'
                                />
                            </Link>
                            <img
                                className={`${building.ICON} ${con.box} w-full object-cover border-8 border-gray-darker shadow-displayLg`}
                                src={`/assets/items/${building.PATH}.jpg`}
                                alt={building.ALIAS}
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex flex-col justify-center items-center py-6'>
                                <h3
                                    className={`${
                                        building.ALIAS === building.NAME
                                            ? 'hidden'
                                            : 'text-xl md:text-2xl lg:text-3xl font-bold w-full'
                                    }`}
                                >
                                    {building.ALIAS}
                                </h3>
                                <h3
                                    className={`${
                                        building.ALIAS === building.NAME
                                            ? 'text-xl md:text-2xl lg:text-3xl'
                                            : 'text-lg md:text-xl lg:text-2xl'
                                    } font-bold w-full`}
                                >
                                    {building.NAME}
                                </h3>
                                <p className='font-display-sm text-sm md:text-base xl:text-lg text-justify'>
                                    {building.DESCRIPTION}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className={`${
                            building.SURROUND === 'hidden' &&
                            building.VIDEO === 'hidden'
                                ? 'hidden'
                                : 'absolute cursor-pointer bottom-3 right-3 lg:bottom-6  h-14 w-14 md:h-24 md:w-24 lg:w-28 lg:h-28 rounded-full transition transform duration-200 ease-in-out hover:-translate-y-2 hover:shadow-buttonSm'
                        }`}
                        src='/assets/map/down-button.svg'
                        alt='button'
                        onClick={toBottom}
                    />
                </main>
                <div
                    className={`${
                        building.SURROUND === 'hidden' &&
                        building.VIDEO === 'hidden'
                            ? 'hidden'
                            : 'relative'
                    }`}
                >
                    <main
                        className={`${bg.backdrop} font-display w-full bg-contain bg-no-repeat bg-bottom xl:bg-cover  flex flex-col items-center justify-center `}
                    >
                        <div
                            className={`${con.top} absolute z-100 top-0 w-full bg-blue-dark`}
                        />
                        <div className='w-3/4 flex flex-col items-center justify-start'>
                            <Button
                                custom={`${building.SURROUND}`}
                                PATH={`/jalan-teknik/${building.PATH}/360`}
                                size='medium'
                            >
                                Foto 360
                            </Button>
                            <div className='flex justify-center items-center pt-6'>
                                <div
                                    className={`${building.VIDEO} border-8 border-gray-darker shadow-displayLg`}
                                >
                                    <iframe
                                        className={`${con.youtube}`}
                                        src={`https://www.youtube.com/embed/${building.VIDEO}`}
                                        allow='autoplay'
                                        allowFullScreen
                                        title='Embedded youtube'
                                    />
                                </div>
                            </div>
                        </div>
                        <img
                            className='absolute cursor-pointer bottom-28 right-3 md:bottom-36 lg:bottom-40 h-14 w-14 md:h-24 md:w-24 lg:w-28 lg:h-28  rounded-full transition transform duration-200 ease-in-out hover:-translate-y-2 hover:shadow-buttonSm'
                            src='/assets/map/up-button.svg'
                            alt='button'
                            onClick={toTop}
                        />
                        <div
                            className={`${con.bot} absolute z-100 bottom-0 w-full bg-blue-dark`}
                        />
                    </main>
                </div>
            </main>
        </>
    );
}
