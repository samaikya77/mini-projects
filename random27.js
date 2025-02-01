function random(number){
var randomnumber=Math.floor(Math.random()*10)+1;
if(number==randomnumber){
    console.log('you guess the correct number');
}
else{
    console.log('you guess the wrong number');
}
}
random(6)