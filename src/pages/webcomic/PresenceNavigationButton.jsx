import { ButtonToGform } from '../../components/presensi';

export function PresenceNavigationButton({ progress }) {
    const displayClass = progress >= 100 ? 'bottom-8' : '-bottom-20';

    return (
        <>
            {new Date() > new Date(2021, 7, 5, 23, 59, 59) ? (
                <div />
            ) : (
                <div
                    className={`absolute ${displayClass} letf-20 transform duration-150`}
                >
                    <ButtonToGform type='asinkron' position='bottom' />
                </div>
            )}
        </>
    );
}
