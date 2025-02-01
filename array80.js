function getRandomItem(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
var item = arr[randomIndex];
return item;
}
var array = [1, 'hello', 5, 8];
var result = getRandomItem(array);
console.log(result);