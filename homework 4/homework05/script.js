let num1=prompt("Enter the first number for the array");
let num2=prompt("Enter the second number for the array");
let num3=prompt("Enter the third number for the array");
let num4=prompt("Enter the fourth number for the array");
let num5=prompt("Enter the fifth number for the array");
let num1Par=Number(num1);
let num2Par=Number(num2);
let num3Par=Number(num3);
let num4Par=Number(num4);
let num5Par=Number(num5);
let IntArr=[num1Par, num2Par, num3Par, num4Par, num5Par];
let hasNonNumber= !IntArr.every(item => typeof item === 'number' && !isNaN(item));
if(hasNonNumber){
    alert("The array contains somthing other than a number");    
}
else{
    function print(IntArr){
    let MaxNum=Math.max(...IntArr);
    let MinNum=Math.min(...IntArr);
    let Sum=MaxNum+MinNum;
    alert(`Max: ${MaxNum} \n Min: ${MinNum} \n Sum: ${Sum}`);
    }
}
print(IntArr);

