let currentYear = new Date().getFullYear();
let BirthYear=prompt(`We are in the year ${currentYear} \nEnter the year you were born in`);
let BirthYearParse=parseInt(BirthYear);
if(BirthYear>currentYear){
    alert("You might have entered the wrong year \nIf you would like to try again please refresh the page");
}
else
   function calculateAge(currentYear, BirthYear){
        let Age=currentYear-BirthYear;
        alert(`Your age is ${Age}`);
        return Age;
   } 
calculateAge(currentYear, BirthYear);

   


