// Only change code below this list
function splitArrayInGroup(arr, n) {
    
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        if(i % n === 0){
           result.push([arr[i]]);
        }
        else{
           result[result.length-1].push(arr[i]);
        };
     };
     return result;
    
}
// Only change code abov this list


console.log(splitArrayInGroup(['a', 'b', 'c', 'd'], 2));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroup([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroup;