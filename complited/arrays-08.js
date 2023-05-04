function arrayDiff(a, b) { // a.length === N  b.length === K
    const s = new Set(b); // O(K)
    return a.filter(item => !s.has(item)); // O(N)
    // let res = [];

    // for (let i = 0; i < a.length; i++) {
    //     if (!b.includes(a[i])) {
    //         res.push(a[i]);
    //     }
    // }

    // return res;
}

// console.log(arrayDiff([1,2,3], [1,2]));

// 1 == 1
// 1 != 2

const N = 1000000;

const x = [];
const y = [];

for(let i = 1; i <= N; i++) {
    x.push(i)
    y.push(-i)
}

console.time(N)
arrayDiff(x, y);
console.timeEnd(N)