// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    
    // Only change code below this line
    var monitorsList = [];

    for (let i = 0; i < newMonitorsList.length; i++) {
        var newArray = [newMonitorsList[i], i + 1];
        monitorsList.push(newArray);
    }

    return monitorsList;
    // Only change code above this line
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;