import React from 'react';
import { Filter } from './components/filter';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';

export function Dokumentasi() {
    return(
        <div className="wrapper">
            <Filter />
            <Hero />
            <Gallery />
        </div>
    );
}