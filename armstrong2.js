var lowNumber = 8
var highNumber = 500
console.log ('Armstrong Numbers:');
for (let i = lowNumber; i <= highNumber; i++) {
    var numberOfDigits = i.toString().length;
    var sum = 0;
    var temp = i;
    while (temp > 0){
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); 
    }
}