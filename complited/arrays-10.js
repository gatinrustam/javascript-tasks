function insertDash(num) {
    //code me
    let array = num.toString().split('');
    let res = [];

    for (let i = 0; i < array.length; i++) {
        res.push(array[i]);

        if (+array[i] % 2 !== 0 
            && i + 1 < array.length
            && +array[i + 1] % 2 !== 0 
        ) {
            res.push('-');
        }
    }

    return res.join('');
}

console.log(insertDash(454793)); // '4547-9-3'