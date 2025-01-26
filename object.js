var person= new Object({
    name:'samaikya',
    age:'30',
    hobbies:['dancing', 'cooking', 'singing'],
    greet: function(){
        console.log('Hello Everyone');
    },
    score: {
        maths:90,
        science:80
    }
});
console.log(typeof person); 
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);