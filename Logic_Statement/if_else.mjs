import PromptSync from "prompt-sync";
const prompt = PromptSync();



let isinpakistan = false;
if (isinpakistan) {
     console.log("Hello Bilal");
}else{
    console.log("Hello David");

}


const percentage = prompt("Enter your Marks Number");
if (percentage >= 90){
    console.log("Grade A+");
} else if (percentage >= 80){
    console.log("Grade A");
}  else if (percentage >= 70){
    console.log("Grade B");
}  else if (percentage >= 60){
    console.log("Grade C");
}  else if (percentage >= 50){
    console.log("Grade D");
}  else {
    console.log("Fail");
} 



let percentage = prompt("Enter your Marks Number");
const result = percentage >= 50 ? "Passed" : "Failed"
console.log(result);

let inInpakistan = prompt("Are You in Pakistan?");
const greeting = inInpakistan === "true" ? "Hello Umar Amin" : "Hello Shahid";
console.log(greeting);



//switch function
let location = prompt("Where are you?");
switch(location){
    case "America":
console.log("Hello Alaxandar");
break;
case "Macendonia":
    console.log("Hello Alaxandar the Great");
    break;
    case "Pakistan":
    console.log("Salam Imran Bhai");
    break;
    case "Germany":
        console.log("Guten Tag Imran");
        break;
    default:
        console.log("Idhar gand marwany aya ha");
    
