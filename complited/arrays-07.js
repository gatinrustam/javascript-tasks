function min(arr, toReturn) {
    // TODO
    // let min = arr[0];
    // let index = 0;

    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] < min) {
    //         min = arr[i];
    //         index = i;
    //     }
    // }



    const valueMin = Math.min(...arr);
    return toReturn === 'value' ? valueMin : arr.indexOf(valueMin);
}


console.log(min([2,4,3,1,5], 'index'));