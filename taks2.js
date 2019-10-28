function calculateWater (arr) {
    let result = 0;
    let tempMax;
    let maxValue = Math.max(...arr);

    let leftPosition = arr.indexOf(maxValue);
    let leftArr = arr.slice(0, leftPosition);

    let rightPosition = arr.indexOf(maxValue);
    let rightArr = arr.slice(rightPosition + 1);

    // debugger
    while (leftArr.length > 1) {
        tempMax = Math.max(...leftArr);
        // splice part of array, from new max to end to get sum of difference
        result += leftArr.splice(leftArr.indexOf(tempMax)).reduce((sum, current) => sum + (tempMax - current), 0);
    }

    while (rightArr.length > 1) {
        tempMax = Math.max(...rightArr);
        // splice part of array, from begin to new max to get sum of difference
        result += rightArr.splice(0, rightArr.lastIndexOf(tempMax) + 1).reduce((sum, current) => sum + (tempMax - current), 0);
    }
    //
    return result
}

console.log(calculateWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // 17
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([7, 0, 1, 3, 4, 1, 2, 1])); // 9
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([2, 2, 1, 2, 2, 3, 0, 1, 2])); // 4
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(calculateWater([2, 2, 2, 2, 2])); // 0
