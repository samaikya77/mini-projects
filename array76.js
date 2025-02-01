function compareName(a, b) {
var name1 = a.name.toUpperCase();
var name2 = b.name.toUpperCase();
var comparison = 0;
if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}
var students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log(students.sort(compareName));