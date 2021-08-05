import { Link } from 'react-router-dom';

import styles from '../../styles/DokumentasiLinkSection.module.scss';

import { ReactComponent as GoIcon } from '../../assets/icons/go.svg';
import img6 from '../../assets/dokumentasi/6.jpg';

export function DokumentasiLinkSection() {
    return (
        <div className={`${styles.wrapper} mb-16`}>
            <section
                className={`${styles.innerContainer} relative h-96 flex items-center justify-center`}
            >
                <Link
                    to='/dokumentasi'
                    className='group text-accent-blue rounded-2xl hover:rounded-3xl transition-all duration-300 border-2 border-current'
                >
                    <div className='m-1 group-hover:m-3 transition-all duration-300 flex bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-2xl'>
                        <span className='block px-8 py-6 font-display font-bold uppercase text-xl'>
                            Lihat
                            <br />
                            dokumentasi
                        </span>
                        <div className='rounded-r-xl p-6 flex items-center justify-center group-hover:bg-current transition-colors'>
                            <GoIcon className='block h-8 w-auto fill-current group-hover:text-white transition-colors' />
                        </div>
                    </div>
                </Link>

                <div className='absolute left-0 top-0 w-full h-full -z-1'>
                    <div className='absolute left-0 top-0 w-full h-full bg-black bg-opacity-50' />
                    <img
                        src={img6}
                        alt='Background'
                        className='w-full h-full object-cover object-center'
                    />
                </div>
            </section>
        </div>
    );
}
