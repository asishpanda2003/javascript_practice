// write a function that takes a string and return the reverse  version of it.

let str="Hello world"
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(str));


// write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.

function checks(num) {
    if (num % 2 == 0) {
        return "Even";
    }else{
        return "Odd"
    }
}

console.log(checks(14));
