var array1=[1,2,3,5]
var array2=[1,2,3,5]
var result=JSON.stringify(array1)==JSON.stringify(array2)
if(result){
    console.log('same elements');
}else{
    console.log('not same elements');
}