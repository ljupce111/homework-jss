let TotalCash=500;
let input=prompt(`Your balance is: ${TotalCash}$\n how much would you like to deposit`);
if(input>500){
    prompt("You dont have enough money \nenter a lower amount");
}
else
    function withdrwal(input){
        let moneyleft=TotalCash-input;
        prompt(`You have withdrawn ${input}$ \n You have ${moneyleft}$ left in your account`);        
        return moneyleft;
    }
withdrwal(input);
