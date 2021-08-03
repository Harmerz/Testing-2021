export const title = 'Jelajah Lembaga';

export const content = (
    <div className='max-w-screen-sm mx-auto'>
        <iframe
            src='https://www.youtube.com/embed/videoseries?list=PLx6TqpOpyeYPKkkQnkixPuV4w8aB-4h6z&rel=0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-96'
        />
        <p className='text-center mt-4 font-body'>
            Silakan lakukan navigasi antarvideo melalui tombol <em>Previous</em>{' '}
            dan <em>Next</em> di YouTube yang tersedia.
        </p>
    </div>
);
