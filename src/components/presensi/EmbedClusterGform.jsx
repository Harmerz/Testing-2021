import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clusters } from './data';

export function EmbedClusterGform() {
    const { type, cluster } = useParams();
    const link = clusters[cluster - 1].gform[type];

    useEffect(() => {
        window.location.href = link;
    }, []);

    return (
        // <iframe
        //     title={`Presensi Kluster ${cluster}`}
        //     src={link}
        //     frameBorder='0'
        //     className='h-screen-no-header w-full sticky top-0 overflow-hidden -my-5'
        // >
        //     Loading...
        // </iframe>
        <h1 className='m-4'>Loading...</h1>
    );
}

/**
 * <ButtonToGform />
 * Props:
 * 1. type = 'sinkron' | 'asinkron' | 'relay'
 * 2. expireDate = {new Date(year, month, day, hours, minutes, seconds)}
 * 3. position = 'top' | 'middle' | 'bottom'
 */

export function ButtonToGform({
    type = 'asinkron',
    expireDate = new Date(2021, 7, 5, 23, 59, 59), // 5 Agustus(index 7) 2021 malam
    position = 'middle',
}) {
    const [hidden, setHidden] = useState(true);

    const clustersIdx = Array.from(
        { length: clusters.length },
        (_, i) => i + 1
    );

    const goToGformHandler = (e, cluster) => {
        e.preventDefault();
        const url = `/presensi/${type}/${cluster}`;
        window.open(url);
    };

    const toggleHandler = (e) => {
        e.preventDefault();
        setHidden(!hidden);
    };

    const getPositionClass = () => {
        if (position === 'top') return 'top-0';
        if (position === 'bottom') return 'bottom-0';
        return 'top-1/2 -translate-y-1/2';
    };

    const selectButtonsElement = clustersIdx.map((i) => (
        <button
            key={i}
            type='button'
            onClick={(e) => goToGformHandler(e, i)}
            className={`px-4 py-2 ${
                i % 2 === 0 ? 'bg-opacity-20' : ''
            } bg-gray-lighter hover:bg-gray-darker transition duration-150 text-left`}
        >
            Klaster {clusters[i - 1]?.name} &rarr;
        </button>
    ));

    return (
        <>
            {new Date() > expireDate ? (
                <div />
            ) : (
                <div className='relative w-max'>
                    <button
                        type='button'
                        onClick={toggleHandler}
                        className='bg-black text-white font-semibold rounded-lg px-12 py-3 hover:shadow-lg w-max'
                    >
                        PRESENSI
                    </button>
                    <div
                        className={`${
                            hidden ? 'h-0 border-none' : 'border'
                        } ${getPositionClass()} flex flex-col border-gray-darker rounded-lg w-max overflow-hidden absolute left-full transform translate-x-4 transiton-height duration-500`}
                    >
                        {selectButtonsElement}
                    </div>
                </div>
            )}
        </>
    );
}
