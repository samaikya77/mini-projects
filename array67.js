var array=[1, 2, 3, 4, 5]
var n=2
var newArray=[];
for(var i=0; i<array.length; i++ ){
    if(array[i] !== n){
         newArray.push(array[i]);
    }
}
console.log(newArray)