import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { buildingData } from '../../components/Buildings';

export function ItemJalanTeknik() {
    const { path } = useParams();
    const building = buildingData.find(({ PATH }) => PATH === path);

    useEffect(() => {
        document.title = `${building.NAME}`;
    }, []);
    return (
        <>
            <div className='min-h-screen bg-center p-16 flex flex-col items-start justify-start'>
                <div className='item-hero'>
                    <Link to='/jalan-teknik'>
                        <p>BACK</p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-3xl font-bold'>{building.NAME}</p>
                    <p className=''>{building.DESCRIPTION}</p>
                    <Link to={`/jalan-teknik/${building.PATH}/360`}>
                        <p>360</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
