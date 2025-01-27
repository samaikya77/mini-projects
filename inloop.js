var student = { 
    name: 'Satya',
    age: 30,
    hobbies: ['cooking','dancing'],
};
for (var key in student) { 
    var value;
    value = student[key];
    console.log(key + " - " +  value); 
} 