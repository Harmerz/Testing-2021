import React, { useEffect } from 'react';
import { Map } from './Map';
import './index.module.css';

export function JalanTeknik() {
    useEffect(() => {
        document.title = 'Jalan-Jalan Teknik';
    }, []);
    return (
        <div className='min-h-screen p-16 flex flex-col items-center justify-start'>
            <p className='text-3xl font-bold'>Jalan-Jalan Teknik</p>
            <Map />
            <div className='flex items-center h-auto w-full justify-around'>
                <p className=''>sebelum</p>
                <p className=''>sesudah</p>
            </div>
        </div>
    );
}
