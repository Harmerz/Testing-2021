import { useState } from 'react';
import { cnJoin } from '../utils/classnames-joiner';

import styles from '../styles/YTPlayerInner.module.css';

import { ReactComponent as PlayIcon } from '../assets/icons/play-fill.svg';

export function YTPlayerInner({ videoId, className }) {
    const [isVideoRevealed, setVideoRevealed] = useState(false);

    const commonClassNames = cnJoin(['bg-pureblack', className]);

    if (!isVideoRevealed) {
        return (
            <button
                type='button'
                className={cnJoin([
                    styles.placeholder,
                    'flex items-center justify-center group',
                    commonClassNames,
                ])}
                onClick={() => {
                    setVideoRevealed(true);
                }}
            >
                <div
                    className={styles.placeholderBg}
                    style={{
                        backgroundImage: `url('//i.ytimg.com/vi/${videoId}/maxresdefault.jpg')`,
                    }}
                />
                <span className='block rounded-full p-4 bg-white bg-opacity-80 group-hover:bg-opacity-100 transition-colors duration-200'>
                    <PlayIcon
                        className={`${styles.playIcon} block fill-current text-black group-hover:text-accent-blue transition-colors duration-200 h-16 w-auto`}
                    />
                </span>
            </button>
        );
    }

    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={cnJoin(['block', commonClassNames])}
        />
    );
}
