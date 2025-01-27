var person = {
    name: 'Samaikya',
    age: 30,
}
var clonePerson = Object.assign({}, person);
console.log(clonePerson);
clonePerson.name = 'Satya';
console.log(clonePerson.name);
console.log(person.name);