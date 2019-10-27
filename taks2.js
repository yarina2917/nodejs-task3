function calculateWater (arr) {
    let leftPosition = 0;
    let maxLeft = 0;

    let rightPosition = arr.length - 1;
    let maxRight = 0;

    let sum = 0;

    while (leftPosition <= rightPosition) {
        if (arr[leftPosition] <= arr[rightPosition]) {
            if (arr[leftPosition] >= maxLeft) {
                maxLeft = arr[leftPosition];
            } else {
                sum += maxLeft - arr[leftPosition]
            }
            leftPosition++;
        } else {
            if (arr[rightPosition] >= maxRight) {
                maxRight = arr[rightPosition];
            } else {
                sum += maxRight - arr[rightPosition]
            }
            rightPosition--
        }
    }
    return sum;
}

console.log(calculateWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); // 17
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([7, 0, 1, 3, 4, 1, 2, 1])); // 9
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])); // 10
console.log(calculateWater([2, 2, 1, 2, 2, 3, 0, 1, 2])); // 4
console.log(calculateWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])); // 24
console.log(calculateWater([2, 2, 2, 2, 2])); // 0
