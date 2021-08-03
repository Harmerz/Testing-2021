import styles from '../styles/penugasan.module.css';

import { ReactComponent as DownloadIcon } from '../assets/icons/file-earmark-arrow-down.svg';
import { GenericPage, PageTitle } from '../components/GenericPage';

export function Penugasan() {
    return (
        <GenericPage>
            <PageTitle>Penugasan</PageTitle>
            <iframe
                src='https://drive.google.com/file/d/1canFad3kwDTDxoo2FdayU39Hww2W5_k0/preview'
                width='640'
                height='480'
                allow='autoplay'
                title='Detail Penugasan PPSMB Kesatria 2021'
                className={`${styles.penugasanContentContainer} w-full rounded-lg`}
            />
            <a
                href='https://drive.google.com/u/0/uc?id=1canFad3kwDTDxoo2FdayU39Hww2W5_k0&export=download'
                className='px-8 py-3 bg-accent-yellow-dark text-white font-display font-semilight flex items-center mt-8 mx-auto w-max leading-none hover:filter hover:brightness-105 transition'
            >
                <DownloadIcon className='block mr-2' />
                Unduh
            </a>
        </GenericPage>
    );
}
