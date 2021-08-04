import React from 'react';
import { Pannellum } from 'pannellum-react';
import { images } from './Images';

export function Threes({ ID, custom }) {
    const image = images[ID - 1];

    return (
        <div
            className={`${custom} border-8 w-full border-gray-darker shadow-displayLg`}
        >
            <Pannellum
                width='100%'
                height='65vh'
                image={image}
                pitch={10}
                yaw={180}
                hfov={110}
                orientationOnByDefault
                showFullscreenCtrl
                autoLoad
            />
        </div>
    );
}
