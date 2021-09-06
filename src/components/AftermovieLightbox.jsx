import { useState } from 'react';

import styles from '../styles/AftermovieLightbox.module.css';

import { ReactComponent as CloseIcon } from '../assets/icons/x-circle.svg';

export function AftermovieLightbox() {
    const [shown, setShown] = useState(true);

    if (!shown) {
        return null;
    }

    return (
        <div
            className={`${styles.overlayBackground} fixed w-full h-full top-0 left-0 bg-pureblack bg-opacity-75 flex items-center justify-center p-4`}
        >
            <aside
                className={`${styles.container} flex items-stretch w-full max-w-3xl h-full max-h-96`}
            >
                <iframe
                    src='https://www.youtube.com/embed/5r8qG_K9hjI?rel=0&modestbranding=1&autoplay=1&mute=1'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className={`${styles.content} flex-grow rounded-xl bg-pureblack`}
                />
                <button
                    type='button'
                    className='block ml-4 self-start rounded-full hover:bg-white hover:bg-opacity-30 transition-colors duration-75'
                    onClick={() => {
                        setShown(false);
                    }}
                    title='Tutup'
                >
                    <CloseIcon className='block fill-current text-white w-8 h-auto' />
                </button>
            </aside>
        </div>
    );
}
