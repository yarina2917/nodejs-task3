const timer = require('./timer');
const testArray = [];

// 5) myPush

Array.prototype.myPush = function (...args) {
    let arr = this;
    for (let i = 0; i < args.length; i++) {
        arr[arr.length] = args[i];
    }
    return arr.length;
};

timer.time('myPush', 'wrapper');
for (let i = 0; i <= 1000; i++) {
    testArray.myPush(i);
}
timer.timeEnd('myPush', 'wrapper');

// 1) myForEach

Array.prototype.myForEach = function (callback, thisArg) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
};

timer.time('myForEach', 'wrapper');
testArray.myForEach((el, i) => {
   return {element: el, index: i}
});
timer.timeEnd('myForEach', 'wrapper');


// 2) myMap

Array.prototype.myMap = function (callback, thisArg) {
    let arr = this;
    let newArr = [];
       for (let i = 0; i < arr.length; i++) {
        newArr.push(callback.call(thisArg, arr[i], i, arr));
    }
    return newArr;
};

timer.time('myMap', 'wrapper');
let mapArr = testArray.myMap(el => el * 2);
timer.timeEnd('myMap', 'wrapper');

// 3) mySort

Array.prototype.mySort = function (compareFunction) {
    let arr = this;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compareFunction ? compareFunction(arr[j], arr[j + 1]) > 0 : arr[j].toString() > arr[j + 1].toString()) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
};

timer.time('mySort', 'wrapper');
testArray.mySort((a, b) => a - b);
timer.timeEnd('mySort', 'wrapper');

// 4) myFilter

Array.prototype.myFilter = function (callback, thisArg) {
    let arr = this;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

timer.time('myFilter', 'wrapper');
let filterArr = testArray.myFilter(el => el > 555);
timer.timeEnd('myFilter', 'wrapper');

timer.logAll();
