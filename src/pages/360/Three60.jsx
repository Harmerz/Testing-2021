import React from 'react';
import { Pannellum } from 'pannellum-react';
import { useParams } from 'react-router-dom';

import { images } from './Threes';

import { buildingData } from '../../components/Buildings';

export function Three60() {
    const { path } = useParams();
    const building = buildingData.find(({ PATH }) => PATH === path);
    const image = images[building.ID - 1];

    return (
        <Pannellum
            width='90vw'
            height='80vh'
            image={image}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
                console.log('panorama loaded'); // eslint-disable-line
            }}
        />
    );
}
