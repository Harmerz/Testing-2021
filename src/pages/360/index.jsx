import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Three60 } from './Three60';

export function ThreeSixty() {
    const { path } = useParams();
    return (
        <div className='min-h-screen bg-center p-16 flex flex-col items-center justify-start'>
            <div className='flex w-full'>
                <Link to={`/jalan-teknik/${path}`}>Back</Link>
            </div>
            <Three60 />
        </div>
    );
}
