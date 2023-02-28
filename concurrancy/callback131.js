function greet (fullName) {
console.log(`Hello ${fullName[0] + ' ' + fullName[1]}`);
}
function mainfunction (username, callback){
const name = username.split (" ")
callback(name)
}

mainfunction("Ahmad Bilal", greet)
