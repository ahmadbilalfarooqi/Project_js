import PromptSync from "prompt-sync";
const prompt = PromptSync();


let userInput = prompt(`On a scale of 1-10, how much do you like the name Alexander?`)
userInput = Number(userInput);
console.log(userInput);

if (userInput > 0 && userInput < 11){
    userInput = false
} else{
    userInput = true

}

while (userInput) {
    userInput = prompt(`On a scale of 1-10, how much do you like the name Alexander?`)
    console.log(userInput);
}



const maxValue = 10
const randomNumber = Math.floor(Math.random()*maxValue) + 1
let status = false;

while (!status) {
    let userInput = prompt(`Enter a number between 1 and ${maxValue} `)
    userInput = Number(userInput);
    if (userInput === randomNumber){
        status = true;
        console.log(`You win! The number was ${randomNumber}`);
    } else if (userInput > randomNumber){
        console.log(`Sorry! your guess was too high. `);
    } else{
        console.log(`Sorry! your was too low. `);
    }
}

