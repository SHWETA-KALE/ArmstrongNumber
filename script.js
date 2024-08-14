function Armstrong(){
    var num1 = parseInt(document.getElementById("numberInput").value);
    var temp, rem, sum =0;
    var res = document.getElementById("result")
     temp = num1;
    while(num1>0){
        rem = num1%10;
        sum = sum + (rem*rem*rem);
        num1 = Math.floor(num1 / 10); 
    }
    if (temp == sum) {
        res.innerHTML = temp + " is an Armstrong number";
    } else {
        res.innerHTML = temp + " is not an Armstrong number";
    }
}