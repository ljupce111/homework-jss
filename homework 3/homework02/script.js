let input=prompt("Enter you dogs age in human years");
if(isNaN(input)){
    input=prompt("Please try again and enter a number");
}
function DogYears(input){
    DYears=input*7;
    console.log(DYears);
    return DYears;
}
console.log("Your dogs real age is:");
DogYears(input);