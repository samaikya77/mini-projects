var array1=[1,2,3]
var array2=[3,4,5]
var arr=array1.concat(array2);
var uniqueArr=[];
for(var i of arr){
    if(uniqueArr.indexOf(i)=== -1)
        uniqueArr.push(i);
    
}
console.log(uniqueArr);