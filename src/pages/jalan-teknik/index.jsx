import React, { useEffect } from 'react';
import { Map } from './Map';
import bg from '../../styles/Backdrop.module.css';
import { GenericPage, PageTitle } from '../../components/GenericPage';

export function JalanTeknik() {
    useEffect(() => {
        document.title = 'Jalan-Jalan Teknik';
    }, []);
    return (
        <GenericPage
            className={`${bg.backdrop} w-full bg-contain bg-no-repeat bg-bottom xl:bg-cover flex flex-col items-center justify-center font-display`}
        >
            <PageTitle>Jalan-Jalan Teknik</PageTitle>
            <div className='w-5/6 md:w-3/4 flex flex-col items-center justify-start '>
                <Map />
            </div>
        </GenericPage>
    );
}
