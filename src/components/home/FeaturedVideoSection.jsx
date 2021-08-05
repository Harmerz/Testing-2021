import { useState } from 'react';
import { cnJoin } from '../../utils/classnames-joiner';

import styles from '../../styles/FeaturedVideoSection.module.css';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-fill.svg';

function Content({ className }) {
    const [isVideoRevealed, setVideoRevealed] = useState(false);

    if (!isVideoRevealed) {
        return (
            <button
                type='button'
                className={cnJoin([
                    styles.placeholder,
                    'flex items-center justify-center group',
                    className,
                ])}
                onClick={() => {
                    setVideoRevealed(true);
                }}
            >
                <div className={styles.placeholderBg} />
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
            src='https://www.youtube.com/embed/WFrqB4fLfWs?rel=0&modestbranding=1&autoplay=1'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className={cnJoin([styles.embeddedVideo, className])}
        />
    );
}

export function FeaturedVideoSection({ className }) {
    return (
        <section className={cnJoin([styles.container, className])}>
            <Content className='w-full h-full' />
        </section>
    );
}
