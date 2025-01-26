var person = {
    id: 1,
    name: 'John',
    age: 23
}
var hasKey = 'name' in person;
if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}