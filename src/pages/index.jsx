import { YTPlayerInner } from '../components/YTPlayerInner';
import { ActivityBlock } from '../components/home/ActivityBlock';
import { DokumentasiLinkSection } from '../components/home/DokumentasiLinkSection';

import styles from '../styles/home.module.scss';

import heroOverlay from '../assets/images/homepage/hero-overlay.svg';
import stagelightBg from '../assets/images/homepage/logo-stagelight-bg.svg';
import stagelightLogo from '../assets/images/homepage/logo-stagelight-fg.gif';
import { ReactComponent as GoIcon } from '../assets/icons/go.svg';
import { AftermovieLightbox } from '../components/AftermovieLightbox';

export function Home() {
    return (
        <div className='flex flex-col bg-gray-lighter -mb-4'>
            <AftermovieLightbox />

            <section className='-mt-20'>
                <img
                    src={heroOverlay}
                    alt='Fakultas Teknik UGM'
                    className={`${styles.heroImg} block bg-cover bg-no-repeat min-h-screen min-w-full object-cover bg-center object-center`}
                    draggable={false}
                />
            </section>

            <section
                className={`${styles.descriptionSection} bg-black text-white flex flex-col md:flex-row justify-between items-center md:items-start px-16 py-24 -mt-8 z-10`}
            >
                <div className='max-w-prose mb-16 md:mr-8'>
                    <h1 className='font-display text-3xl mb-6 font-bold text-white'>
                        Apa itu PPSMB Kesatria?
                    </h1>
                    <p className='font-display font-semilight'>
                        Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB)
                        Kesatria merupakan masa orientasi mahasiswa baru di
                        Fakultas Teknik UGM. PPSMB Kesatria bertujuan untuk
                        memperkenalkan lingkungan Fakultas Teknik, serta
                        menanamkan nilai-nilai kemanusiaan khususnya di bidang
                        keteknikan. PPSMB Kesatria akan dilaksanakan selama 2
                        hari pada tanggal 4 dan 5 Agustus 2021.
                    </p>
                    <a
                        href='https://s.id/GuidebookPesertaKesatria2021'
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center bg-accent-yellow-dark text-white hover:bg-white hover:text-accent-yellow-dark transition-colors max-w-max py-2 px-4 group mt-8'
                    >
                        <span className='block font-display font-semibold'>
                            Lihat <i>Guide Book</i>
                        </span>
                        <GoIcon className='block fill-current h-5 w-auto ml-4 group-hover:transform group-hover:translate-x-0.5 transition-transform duration-300' />
                    </a>
                </div>
                <div className='relative flex-shrink-0 md:self-end -mb-24'>
                    <img
                        src={stagelightBg}
                        alt='Logo PPSMB Kesatria 2021'
                        className='max-h-72'
                    />
                    <img
                        src={stagelightLogo}
                        alt='Logo PPSMB Kesatria 2021'
                        className='absolute bottom-16 left-0 right-0 m-auto w-1/2 -z-1'
                    />
                </div>
            </section>

            <section className={`${styles.featuredVideoSection} -mt-4`}>
                <YTPlayerInner
                    videoId='WFrqB4fLfWs'
                    className='w-full h-full'
                />
            </section>

            <div className='flex flex-col sm:flex-row sm:justify-center px-8 py-24'>
                <ActivityBlock
                    title='Agenda'
                    id='agenda'
                    items={[
                        {
                            title: 'Hari Pertama',
                            description: 'Rabu, 4 Agustus 2021',
                            url: '/agenda/hari-1',
                        },
                        {
                            title: 'Hari Kedua',
                            description: 'Kamis, 5 Agustus 2021',
                            url: '/agenda/hari-2',
                        },
                    ]}
                    className='text-accent-red flex-grow'
                />
                <ActivityBlock
                    title='Penugasan'
                    id='penugasan'
                    items={[
                        {
                            title: 'Lihat Seluruh Penugasan',
                            description:
                                'Dokumen resmi berisi penugasan dan daftar kegiatan',
                            url: '/penugasan',
                        },
                    ]}
                    className='text-accent-yellow-dark flex-grow mt-16 sm:mt-0 sm:ml-10'
                />
            </div>

            <DokumentasiLinkSection />
        </div>
    );
}
