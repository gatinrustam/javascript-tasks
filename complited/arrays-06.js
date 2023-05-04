function digPow(n, p){
    // let sum = 0;

    // n.toString().split('').forEach(item => {
    //     sum += Math.pow(Number(item), p);
    //     p++;
    // })

    

    const sum = n
        .toString()
        .split('')
        .reduce((acc, item, index) => acc + Number(item) ** (index + p), 0);

    return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(46288, 3));