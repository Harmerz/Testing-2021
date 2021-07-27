import styles from '../styles/home.module.css';

// import { ReactComponent as heroBg } from '../assets/images/homepage/hero-bg.svg';
// import { ReactComponent as HeroOverlay } from '../assets/images/homepage/hero-overlay.svg';
// import heroBg from '../assets/images/homepage/hero-bg.png';
import heroOverlay from '../assets/images/homepage/hero-overlay.svg';
import stagelightBg from '../assets/images/homepage/logo-stagelight-bg.svg';
import stagelightLogo from '../assets/images/homepage/logo-stagelight-fg.gif';
import { PenugasanSectionTemp } from '../components/PenugasanPage/PenugasanSectionTemp';

export function HomePage() {
    return (
        <>
            <section className='-mt-20'>
                <img
                    src={heroOverlay}
                    alt='Fakultas Teknik UGM'
                    className={`${styles.heroImg} block bg-cover bg-no-repeat min-h-screen min-w-full object-cover bg-center object-center`}
                />
            </section>
            <section
                className={`${styles.descriptionSection} bg-black text-white flex flex-col md:flex-row justify-between items-center md:items-start px-16 py-24 -mt-8`}
            >
                <div className='max-w-prose mb-16 md:mr-8'>
                    <h1 className='font-display text-3xl mb-6 font-bold text-white'>
                        Apa itu PPSMB Kesatria?
                    </h1>
                    <p className='font-display-sm'>
                        Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB)
                        Kesatria merupakan masa orientasi mahasiswa baru di
                        Fakultas Teknik UGM. PPSMB Kesatria bertujuan untuk
                        memperkenalkan lingkungan Fakultas Teknik, serta
                        menanamkan nilai-nilai kemanusiaan khususnya di bidang
                        keteknikan. PPSMB Kesatria akan dilaksanakan selama 2
                        hari pada tanggal 4 dan 5 Juli.
                    </p>
                </div>
                <div className='relative flex-shrink-0 md:self-end -mb-24'>
                    <img
                        src={stagelightBg}
                        alt='Logo PPSMB Kesatria 2021'
                        className='max-h-72'
                    />
                    {/* ALTERNATIVE: Set the gif as the background-image instead and adjust its positionings from there */}
                    <img
                        src={stagelightLogo}
                        alt='Logo PPSMB Kesatria 2021'
                        className='absolute bottom-16 left-0 right-0 m-auto w-1/2 -z-1'
                    />
                </div>
            </section>
            <PenugasanSectionTemp />
        </>
    );
}
