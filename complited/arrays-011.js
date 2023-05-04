function filterHomogenous(arrays) {
    // Alea iacta est, code legionary!
    // return arrays.filter(items => typeof items[0] === typeof items);

    // const resArrays = [];
    // for (let i = 0; i < arrays.length; i++) {

    //     isHomogenous(arrays[i]);
    //     // console.log(arrays[i])
    //     // arrays[i].filter((item) => typeof item[0] === typeof item);
    //     // for (let j = 0; j < arrays[i].length; j++) {
    //     //     // console.log(typeof arrays[i][0] === typeof arrays[i][j]);
    //     //     if (typeof arrays[i][0] === typeof arrays[i][j]) {
    //     //         resArrays.push(arrays[i]);
    //     //     }
    //     // }
    // }

    return arrays.filter(item => item.length !== 0 && isHomogenous(item));
}

function isHomogenous(arr) {
    let typeFirst = typeof arr[0];

    // for (let item of arr) {
    //     if (typeFirst !== typeof item) {
    //         return false;
    //     }
    // }

    return arr.every(item => typeFirst === typeof item);
}

console.log(isHomogenous([1, 5, 4]));
console.log(isHomogenous([3, "v", 4]));
console.log(isHomogenous(["3", "f"]));

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));