var number=153
var temp=number
var sum=0
while(temp>0){
    var remainder=temp%10
    sum += remainder*remainder*remainder
    temp=parseInt(temp/10)
}
if(sum == number){
    console.log(true);
}else{
    console.log(false);
}