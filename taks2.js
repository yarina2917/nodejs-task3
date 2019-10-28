function calculateWater (arr) {
    let result = 0;
    let maxValue = Math.max(...arr);

    let leftPosition = arr.indexOf(maxValue);
    let tempLeftArr = arr.slice(0, leftPosition);

    let rightPosition = arr.indexOf(maxValue);
    let tempRightArr = arr.slice(rightPosition + 1);


    while (tempLeftArr.length > 1) {
        // find max value and it index
        leftPosition = tempLeftArr.indexOf(Math.max(...tempLeftArr));
        // copy part of array, from new max to end to get sum of difference
        result = tempLeftArr.slice(leftPosition + 1).reduce((sum, current) => sum + (tempLeftArr[leftPosition] - current), result);
        // remove elements from max value to end
        tempLeftArr.splice(leftPosition);
    }

    while (tempRightArr.length > 1) {
        // find max value and it lastIndex
        rightPosition = tempRightArr.lastIndexOf(Math.max(...tempRightArr));
        // copy part of array, from new begin to new max to get sum of difference
        result = tempRightArr.slice(0, rightPosition).reduce((sum, current) => sum + (tempRightArr[rightPosition] - current), result);
        // remove elements from 0 to max value
        tempRightArr.splice(0, rightPosition + 1);
    }

    return result
}

console.log(calculateWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // 17
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([7, 0, 1, 3, 4, 1, 2, 1])); // 9
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([2, 2, 1, 2, 2, 3, 0, 1, 2])); // 4
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(calculateWater([2, 2, 2, 2, 2])); // 0
