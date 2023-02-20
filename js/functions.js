function splitMessage(message, delimiter) {
    const arr = message.split(delimiter);
    return arr;
}
const message = "Hellow, World. How Are You?";
const delimiter = " ";
const arr = splitMessage(message, delimiter);

console.log(arr);


function makeStringFromArray(array, separator) {
    const string = array.join(separator);
    return string;
}
const array = ["apple", "cherry", "juice"];
const separator = " ";
const string = makeStringFromArray(array, separator);

console.log(string);


function checkFruit(fruit) {
    const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];
    return fruits.includes(fruit); 
}
console.log(checkFruit("apples"));
// console.log(checkFruit("banana"));