import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import { Threes } from './Threes';
import bg from '../../styles/Backdrop.module.css';
import { buildingData } from '../../components/Buildings';
import { Button } from '../../components/Button';

export function ThreeSix() {
    const { path } = useParams();
    const building = buildingData.find(({ PATH }) => PATH === path);

    useEffect(() => {
        document.title = `${building.ALIAS} - 360`;
    }, []);

    return (
        <>
            <DeviceOrientation lockOrientation='landscape'>
                <Orientation orientation='landscape' alwaysRender={false}>
                    <main
                        className={`${bg.backdrop} min-w-full bg-cover lg:bg-contain lg:bg-no-repeat lg:bg-bottom xl:bg-cover flex flex-col items-center justify-center font-display`}
                    >
                        <div className='flex flex-col items-start justify-center w-5/6 md:w-3/4 bg-none'>
                            <Button
                                PATH={`/agenda/hari-1/jalan-jalan-teknik/${path}`}
                                size='medium'
                            >
                                Kembali
                            </Button>
                            <Threes ID={`${building.ID}`} custom='mt-4' />
                        </div>
                    </main>
                </Orientation>
                <Orientation orientation='portrait' alwaysRender={false}>
                    <main
                        className={`${bg.backdrop} min-w-full bg-contain bg-no-repeat bg-bottom xl:bg-cover flex flex-col items-center justify-center font-display`}
                    >
                        <div className='flex flex-col w-5/6 md:w-3/4 bg-none'>
                            <Button
                                PATH={`/agenda/hari-1/jalan-jalan-teknik/${path}`}
                                size='medium'
                            >
                                Kembali
                            </Button>
                            <h1 className=' text-lg md:text-2xl font-bold mt-4 text-justify '>
                                Mohon ubah mode perangkat anda ke mode
                                landscape!
                            </h1>
                        </div>
                    </main>
                </Orientation>
            </DeviceOrientation>
        </>
    );
}
