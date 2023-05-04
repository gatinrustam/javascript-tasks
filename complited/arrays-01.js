function positiveSum(arr) {
    return arr.reduce((acc, item) => {
        if (item > 0) {
            return acc + item;
        }

        return acc;
    }, 0);
}