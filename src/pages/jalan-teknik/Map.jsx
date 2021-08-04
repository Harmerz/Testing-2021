import React, { useState, useEffect } from 'react';
import { TileLayer, Marker, Popup, MapContainer, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import '../../styles/Map.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';
import { Link, useRouteMatch } from 'react-router-dom';
import { buildingData } from '../../components/Buildings';
import marker from '../../assets/marker/marker.svg';

// Map center
const position = [-7.765197678255795, 110.37260863121014];

export function Map() {
    const { url } = useRouteMatch();

    // Detecting mobile or not
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const isMobile = width < 768;

    // defining marker style on the map
    const icon = isMobile
        ? new L.Icon({
              iconUrl: marker,
              iconSize: [20, 20],
              iconAnchor: [15, 15], // [left/right, top/bottom]
              popupAnchor: [0, 20],
              tooltipAnchor: [0, 0],
          })
        : new L.Icon({
              iconUrl: marker,
              iconSize: [30, 30],
              iconAnchor: [15, 15],
              popupAnchor: [0, 34],
              tooltipAnchor: [0, 0],
          });

    return (
        <>
            <MapContainer
                className='custom-leaflet-container border-8 border-gray-darker shadow-displayLg font-display '
                center={position}
                zoom={isMobile ? 17 : 18}
                scrollWheelZoom
                touchZoom
                fullscreenControl
                doubleClickZoom
                tap={false}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {buildingData.map((building) => {
                    return (
                        <Marker
                            position={building.LOCATION}
                            icon={icon}
                            key={building.ID}
                            riseOnHover
                        >
                            <Link to={`${url}/${building.PATH}`}>
                                <Popup
                                    minWidth={0}
                                    closeButton={false}
                                    closeOnEscapeKey
                                    className='custom-popup shadow-dislaySm'
                                >
                                    <Link
                                        className='text-sm md:text-xl font-bold text-blue-dark text-center'
                                        to={`${url}/${building.PATH}`}
                                    >
                                        {building.ALIAS}
                                    </Link>
                                </Popup>
                                <Tooltip
                                    opacity={1}
                                    className='custom-tooltip shadow-dislaySm'
                                >
                                    <p className='text-sm md:text-xl font-bold text-blue-dark text-center'>
                                        {building.ALIAS}
                                    </p>
                                </Tooltip>
                            </Link>
                        </Marker>
                    );
                })}
                ;
            </MapContainer>
        </>
    );
}
