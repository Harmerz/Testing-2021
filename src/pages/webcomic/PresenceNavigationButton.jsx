export function PresenceNavigationButton({ progress, onClick }) {
    const displayClass = progress >= 100 ? 'bottom-8' : '-bottom-20';
    return (
        <button
            type='button'
            onClick={onClick}
            className={`flex items-center absolute ${displayClass} right-20 bg-brand-light border-2 border-brand-dark px-6 py-2 rounded-lg transform duration-150 hover:-translate-y-1 hover:shadow-md`}
        >
            <div className='mr-2 text-sm lg:text-base'>Presensi</div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
                />
            </svg>
        </button>
    );
}
