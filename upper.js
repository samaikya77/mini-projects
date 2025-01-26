function capitalizeFirstLetter(str) {
var capitalized = str.charAt(0).toUpperCase() + str.slice(1);
return capitalized;
}
var string = 'samaikya'
var result = capitalizeFirstLetter(string);
console.log(result);