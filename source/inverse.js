"use strict";  /** modern mode connection */

/**
 * @function - Returns the invesed array except for the elements (from begin / to end) specified in the argument.
 * @param {array} arr - Array of elements.
 * @param {number} arg - Count of elements that don't need to be inversed.
 * @returns {array}
 */

const inverse = (arr, arg = 0) => {
    /** input validation */
    if (!Number.isInteger(arg) || !Array.isArray(arr)) return ['incorrect arguments'];

    /** find border of array for reverse */
    let left = Math.max(arg, 0);
    let right = Math.min(arr.length + arg, arr.length);

    /** reverse array */
    const invArr = arr.map((item, index, arr) => {
        if (left <= index && index < right){
            return arr[right + left - index - 1];
        } else {
            return item;
        }
    });

    return invArr;
}