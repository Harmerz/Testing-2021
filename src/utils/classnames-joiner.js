/**
 * @param {string[]} arrayOfClassNames Array of classNames to be combined/joined with spaces
 * @returns {string} The space-combined classNames
 */
export function cnJoin(arrayOfClassNames) {
    return arrayOfClassNames.filter((x) => x).join(' ');
}
