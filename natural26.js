function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }
var number = 4
var result = sum(number);
console.log(`The sum is ${result}`);