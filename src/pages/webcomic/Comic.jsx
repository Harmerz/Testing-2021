import { useState, useRef, useLayoutEffect } from 'react';

export function Comic({ imageCount, openedPage }) {
    const [containerSize, setContainerSize] = useState({
        width: 0,
        height: 0,
    });
    const containerRef = useRef(null);

    const updateContainerSize = () => {
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });
    };

    useLayoutEffect(() => {
        if (containerRef.current) {
            updateContainerSize();
            window.addEventListener('resize', updateContainerSize);
        }
        return () => window.removeEventListener('resize', updateContainerSize);
    }, [containerRef]);

    const baseImageUrl = 'https://ik.imagekit.io/lutfiandri/webcomic-kesatria/';
    const wrapperStyles = {
        width: `${containerSize.width * (imageCount + 1)}px`,
        height: `${containerSize.height}px`,
        '--tw-translate-x': `-${containerSize.width * openedPage}px`,
    };

    const imagesComponent = Array.from(
        Array(imageCount + 1),
        (_, index) => index
    ).map((i) => (
        <div className='w-screen' key={i}>
            <img
                src={`${baseImageUrl}${i}`}
                alt={`webcomic page ${i}`}
                className='w-full h-full object-contain'
            />
        </div>
    ));

    return (
        <div
            ref={containerRef}
            className='w-full h-full relative overflow-hidden'
        >
            <div
                style={wrapperStyles}
                className='h-full flex flex-row flex-nowrap transition duration-200 transform absolute'
            >
                {imagesComponent}
            </div>
        </div>
    );
}
