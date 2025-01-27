var a=5
var isprime=true
for(var i=2; i<a;i++){
    if(a%i == 0){
        isprime=false
        break
    }else{
        isprime=true
    }
}
if(isprime == true){
    console.log("is prime");
}else{
    console.log("not prime");
}