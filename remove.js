var student = { 
    name: 'samaikya',
    age: 30,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};
delete student.greet;
delete student['score'];
console.log(student);