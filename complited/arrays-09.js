var capitals = function (word) {
	// Write your code here
    return word
        .split('')
        .map((letter, index) => {
            if (letter.toUpperCase() === letter) {
                return index;
            }
            return -1;
        })
        .filter(item => item !== -1);
};


console.log(capitals('CodEWaRs')); //[0,3,4,6]