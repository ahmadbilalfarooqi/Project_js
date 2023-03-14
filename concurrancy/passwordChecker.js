const allowPasswords = ["Password", "Alexander", "PIAIC"];

function checkPassword (password){
    return allowPasswords.includes(password)
}

function login(passwrod){
    return new Promise ((resolve,reject) => {
        if (checkPassword(passwrod)) {
            resolve({
                status : true,
            })
        } else {
            reject({
                status : false,
            })
        }

    })
}
function checker(password){
    login(password)
        .then(value => {
            console.log("Authorize User");
            console.log(value);
        })
        .catch(value => {
            console.log("Reject User");
            console.log(value);
        })

}

checker("Alexander")
checker("Imran")