// Only change code below this list
function myMutation(arr) {
    return arr[1].toLowerCase().split('').every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });    
}
// Only change code abov this list

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwutsrqponmlkjihgfedcba", "qrst"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Aline", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;