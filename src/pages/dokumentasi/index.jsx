import React from 'react';
import { Filter } from './components/filter';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';
import { GenericPage, PageTitle } from '../../components/GenericPage';

export function Dokumentasi() {
    return (
        <GenericPage>
            <PageTitle>Dokumentasi</PageTitle>
            <Filter />
            <Hero />
            <Gallery />
        </GenericPage>
    );
}
