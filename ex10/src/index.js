// Only change code below this list
function mySplice(arr1, arr2, n) {   
    arr2.splice(n, 0, ...arr1.reverse());
    return arr2;
}
// Only change code abov this list

console.log(mySplice([1,2,3], [4,5], 1));
console.log(mySplice([1,2,3], [4,5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;



