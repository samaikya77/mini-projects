var array=[1, 2, 3];
var object={x:12, y:12};
var index=array.length;
array.splice(index,0,object);
console.log(array);