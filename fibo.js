var a=6
var n1=0, n2=1, nextterm
for(i=1; i<=10; i++){
    console.log(n1);
    nextterm=n1+n2;
    n1=n2;
    n2=nextterm;
}