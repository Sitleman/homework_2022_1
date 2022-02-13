'use strict';  /** modern mode connection */

/**
 * Returns the invesed array except for the elements (from begin / to end) specified in the argument.
 * @param {Object[]} arr - Array of elements.
 * @param {number} [arg=0] - Count of elements that don't need to be inversed.
 * @returns {Object[]}
 */

const inverse = (arr, arg = 0) => {
    /** input validation */
    arg = Number(arg); 
    if (!Array.isArray(arr) || !Number.isInteger(arg)) {
        throw new Error('Incorrect arguments :(');
    }

    /** find border of array for reverse */
    const left = Math.max(arg, 0);
    const right = Math.min(arr.length + arg, arr.length);

    /** reverse array */
    return arr.map((item, index, arr) => {
        return (left <= index && index < right) ? arr[right + left - index - 1] : item;
    });
}
