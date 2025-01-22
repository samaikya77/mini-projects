var hcf;
var a=6
var b=8
for(var i=1; i<=a && i<=b; i++){
    if(a%i==0 && b%i==0){
        hcf=i;
    }
}
var lcm=(a*b)/hcf;
console.log(lcm);