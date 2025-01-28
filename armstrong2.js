for (let i = 8; i <= 500; i++) {
    var numberOfDigits = i.toString().length;
    var sum = 0;
    var temp = i;
    while (temp > 0){
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); 
    }
    if(sum == i){
        console.log(`${i} is an armstrong number`)
    }else{
        console.log(`${i} is not armstrong`)
    }
}