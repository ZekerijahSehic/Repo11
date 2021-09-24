// Only change code below this list
function multiplyArrayFunction(myArr) {

    var product = 1;
    var sum = 0;
    var productAndSum = [];

    for (var i=0; i < myArr.length; i++){
        for (var j=0; j< myArr[i].length; j++){
            product = product * myArr[i][j];
            sum = sum + myArr[i][j];          
        }
    }
    productAndSum.push(product, sum);
    return productAndSum
    
}
// Only change code abov this list

console.log(multiplyArrayFunction([[2], [5,6,7], [8,9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5,0.2], [8]]));
console.log(multiplyArrayFunction([[1,2], [3,4,5,6], [7,8,9]]));
module.exports = multiplyArrayFunction;