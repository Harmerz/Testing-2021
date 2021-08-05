import React from 'react';

export function Hero() {
    return (
        <div className='aftermovie-wrapper -mx-4 sm:-mx-8 mb-24 mt-16'>
            <iframe
                src='https://www.youtube.com/embed/4NfHc26XWO4?rel=0&modestbranding=1'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='video block w-full'
            />
        </div>
    );
}
