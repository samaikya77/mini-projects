var a=2
var b=3
var c=4
var root1;
var root2;
var d=(b*b)-4*a*c;
if(d>0){
    root1=(-b+Math.sqrt(d))/2*a;
    root2=(-b-Math.sqrt(d))/2*a;
    console.log(`the roots are ${root1} and ${root2}`)
}else if(d==0){
    root1=root2= -b/2*a;
    console.log(`the roots are ${root1} and ${root2}`)
}else{
    var realpart=(-b / (2 * a)).toFixed(2);
    var imaginarypart=(Math.sqrt(-d) / (2 * a)).toFixed(2);
    console.log(`the roots are ${realpart} and ${imaginarypart}`)
}