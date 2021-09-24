// Create an array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
// End of creating an array

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    // Only change code below this line

    var sum = 0;
    var average = 0;
    var z = 0;
    for (var i = 0; i < newTemps.length; i++) {
        for (var j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
            z++;
            if (z === 4) {
                average = sum / 4;
                averageDayTemp.push(average);
                sum = 0;
                z = 0;
            }
        }
    }
    
    // Only change code above this line
    return averageDayTemp;
}
console.log(myArrayFunction(temps))
module.exports = myArrayFunction;