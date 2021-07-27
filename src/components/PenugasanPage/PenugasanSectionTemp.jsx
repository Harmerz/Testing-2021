import styles from '../../styles/penugasan-temp.module.css';

export function PenugasanSectionTemp() {
    return (
        <section className='mt-24 mb-48 px-8 text-center'>
            <h1 className='text-4xl font-display font-bold mb-8'>Penugasan</h1>
            <iframe
                src='https://drive.google.com/file/d/1canFad3kwDTDxoo2FdayU39Hww2W5_k0/preview'
                width='640'
                height='480'
                allow='autoplay'
                title='Detail Penugasan PPSMB Kesatria 2021'
                className={`${styles.penugasanContentContainer} w-full rounded-lg`}
            />
        </section>
    );
}
