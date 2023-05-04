"use strict"

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     return l.filter(item => Number.isInteger(item));
// }

function filter_list(list) {
    // const result = [];

    // for (const element of list) {
    //     if (typeof element === 'number') {
    //         result.push(element);
    //     }
    // }

    // return result;

    return list.filter(element => typeof element === 'number');
}

filter_list(["q", 1])