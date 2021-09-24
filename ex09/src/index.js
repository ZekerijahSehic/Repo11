// Only change code below this list
function myBouncer(arr) {
    var lever = arr.filter(Boolean);
    return lever;
}
// Only change code abov this list

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;







