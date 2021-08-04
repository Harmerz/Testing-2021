import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map } from './Map';
import bg from '../../styles/Backdrop.module.css';

export function JalanTeknik() {
    useEffect(() => {
        document.title = 'Jalan-Jalan Teknik';
    }, []);
    return (
        <main
            className={`${bg.backdrop} w-full bg-contain bg-no-repeat bg-bottom xl:bg-cover flex flex-col items-center justify-center font-display`}
        >
            <div className='w-5/6 md:w-3/4 flex flex-col items-center justify-start '>
                <h1 className='text-2xl md:text-3xl font-bold pb-4'>
                    JALAN-JALAN TEKNIK
                </h1>
                <Map />
                <div className='flex sm:hidden items-center h-auto w-full justify-between pt-6'>
                    <Link to='/jalan-teknik'>
                        <img
                            className='w-28'
                            src='/assets/map/prev-button.svg'
                            alt='button'
                        />
                    </Link>
                    <Link to='/jalan-teknik'>
                        <img
                            className='w-28'
                            src='/assets/map/next-button.svg'
                            alt='button'
                        />
                    </Link>
                </div>
            </div>
        </main>
    );
}
