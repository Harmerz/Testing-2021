import { ReactComponent as DownloadIcon } from '../../../assets/icons/file-earmark-arrow-down.svg';

export const title = 'Kekerasan Seksual';

export const content = (
    <div className='max-w-screen-sm mx-auto'>
        <iframe
            src='https://drive.google.com/file/d/1FyCbvAtbQ1f7PHRvBD-8_90O3Kgu4nWH/preview'
            allow='autoplay'
            title='Slide tentang materi kekerasan seksual'
            className='w-full h-96'
        />
        <a
            href='https://drive.google.com/u/0/uc?id=1FyCbvAtbQ1f7PHRvBD-8_90O3Kgu4nWH&export=download'
            className='px-8 py-3 bg-accent-yellow-dark text-white font-display font-semilight flex items-center mt-8 mx-auto w-max leading-none hover:filter hover:brightness-105 transition'
        >
            <DownloadIcon className='block mr-2' />
            Unduh
        </a>
    </div>
);

export const attendanceCheckType = 'asinkron';
