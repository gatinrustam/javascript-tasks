function generateShape(integer){
    // let line = "";
    // for (let j = 0; j < integer; j++) {
    //     line += '+';
    // }

    const line = "+".repeat(integer);

    let result = '';

    for (let i = 0; i < integer; i++) {
        result += line;
        if (i !== integer - 1) {
            result += '\n';
        }
    }

    return result;
}


console.log(generateShape(10));