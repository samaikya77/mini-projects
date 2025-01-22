var hcf;
var a=12
var b=16
for(var i=1; i<=a && i<=b; i++){
    if(a%i==0 && b%i==0){
        hcf=i;
    }
}
console.log(hcf);