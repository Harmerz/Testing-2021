/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import { buildingData } from '../../components/Buildings';
import { MaxText } from '../../components/MaxText';
import './index.module.css';
import defaultIcon from '../../assets/marker/default.png';

const position = [-7.76535792264665, 110.37236026800583];

export function Map() {
    const [mobile, setMobile] = useState(false);

    const isMobile = () => {
        window.innerWidth <= 960 ? setMobile(!mobile) : setMobile(mobile);
    };

    useEffect(() => {
        isMobile();
    }, []);

    window.addEventListener('resize', isMobile);

    return (
        <>
            <div className='map-container'>
                <MapContainer
                    center={position}
                    zoom={mobile ? 17 : 18}
                    scrollWheelZoom
                    touchZoom
                    fullscreenControl
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {buildingData.map((building) => {
                        const icon = new L.Icon({
                            iconUrl: defaultIcon,
                            iconSize: [25, 35],
                            iconAnchor: [17, 46], // [left/right, top/bottom]
                            popupAnchor: [0, -46], // [left/right, top/bottom]
                        });

                        return (
                            <Marker
                                position={building.LOCATION}
                                icon={icon}
                                key={building.ID}
                            >
                                <Popup>
                                    <div className='map-popup'>
                                        <p className='text-lg font-semibold'>
                                            {building.NAME}
                                        </p>
                                        <MaxText
                                            text={building.DESCRIPTION}
                                            PATH={`/jalan-teknik/${building.PATH}`}
                                        />
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                    ;
                </MapContainer>
            </div>
        </>
    );
}
