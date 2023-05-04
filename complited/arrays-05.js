function getCount(str) {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    // return str.split('').filter(item => set.has(item)).length;


    // let acc = 0;
    // for(const item of str) {
    //     if (set.has(item)) {
    //         acc++
    //     }
    // }
    // return acc;

    // return str.split('').reduce((acc, item) => {
    //     if (set.has(item)) {
    //         acc++
    //     }
    //     return acc;
    // }, 0)


    return Array.prototype.reduce.call(str, (acc, item) => {
        if (set.has(item)) {
            acc++
        }
        return acc;
    }, 0);
}

function reduce(arr, cb, initialValue) {
    let result = initialValue;

    for (let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i]);
    }

    return result;
}

const obj = {
    0: "A",
    1: "b",
    2: "C",
    length: 3,
};

console.log([].filter.call(obj, letter => letter === letter.toUpperCase()));


// const set = new Set(['a', 'e', 'i', 'o', 'u']);
// console.log(reduce("qwertyuiop", (acc, item) => {
//     if (set.has(item)) {
//         acc++
//     }
//     return acc;
// }, 0));

// console.log(reduce([2,3,4,5], (аккумулятор, самЭлемент) => аккумулятор * самЭлемент, 1)); // 120