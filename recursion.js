function sum(a){
    if(a>0){
        return a+sum(a-1);
    }
    else{
        return a;
    }
}
var a=25
var result=sum(a);
console.log(result);

