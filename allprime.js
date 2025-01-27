for(var i=1; i<=10; i++){
    for(var j=2; j<i; j++){
        var isprime=true
        if(i%j == 0){
            isprime=false
            break
        }else{
            isprime=true
        }
    }
    if(isprime== true){
        console.log(i + 'is prime');
    }else{
        console.log(i + 'is not prime');
    }
}