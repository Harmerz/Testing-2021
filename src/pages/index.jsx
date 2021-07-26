import styles from '../styles/home.module.css';

export function HomePage() {
    return (
        <>
            <section className='min-h-screen'>
                &gt;Full page section&gt;
            </section>
            <section className={`${styles.descriptionSection} bg-black text-white flex flex-col md:flex-row p-8`}>
                <div>
                    <h1 className='font-display'>Apa itu PPSMB Kesatria?</h1>
                    <p>
                        PPSMB Kesatria adalah Pelatihan Pembelajar Sukses bagi Mahasiswa Baru untuk Fakultas Teknik
                        yang pada tahun ini akan diselenggarakan pada tanggal 11 dan ....[?]
                    </p>
                </div>
            </section>
        </>
    );
}
