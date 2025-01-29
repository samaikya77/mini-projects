var string1='javascript program';
var string2='javascript programm';
var result=string1.toUpperCase() === string2.toUpperCase();
if(result){
    console.log('the strings are similar.');
}else{
    console.log('the strings are not similar');
}