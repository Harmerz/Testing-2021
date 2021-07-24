import { useEffect } from 'react';

export function Timer({ openedPage, progresses, setProgresses }) {
    const timeoutTime = 10; // (ms)
    const timerTime = 15000; // (ms)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgresses({
                ...progresses,
                [openedPage]:
                    progresses[openedPage] + (100 * timeoutTime) / timerTime,
            });
        }, timeoutTime);

        if (progresses[openedPage] >= 100) {
            clearTimeout(timeout);
        }
        return () => clearTimeout(timeout);
    }, [progresses[openedPage]]);

    return (
        <div
            style={{ width: `${progresses[openedPage]}%` }}
            className='h-1 bg-brand-dark'
        />
    );
}
