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
let numbers=[num1Par, num2Par, num3Par, num4Par, num5Par];
let hasNonNumber= !numbers.every(item => typeof item === 'number' && !isNaN(item));
if(hasNonNumber){
    alert("The array contains somthing other than a number");    
}
else{
    function listPr(){
        let data = [numbers[0], numbers[1],numbers[2], numbers[3], numbers[4]];
        let list = document.getElementById("myList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }
    }
    function calc(){
            let sum = 0;
            for (const el of numbers) {
            sum += el;
}
        let addNewHtmlAtMain = document.getElementById("main");
        addNewHtmlAtMain.innerHTML += `<h3>The sum of the numbers in the array is ${sum}</h3>`;
    }
}
listPr();
calc();