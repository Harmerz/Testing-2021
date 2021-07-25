import { useEffect } from 'react';

/**
 * Changes the document title based on the currently-mounted page component
 * @param {string} titleString
 */
export function useTitle(titleString) {
    return useEffect(() => {
        document.title = titleString;
    }, []);
}
