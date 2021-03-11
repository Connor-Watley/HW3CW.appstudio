let passWord = prompt("Enter your password")
let confirmPassWord = prompt("Confirm your password")

function Compare(pass, confirmPass) {
    let confirmed = pass.localeCompare(confirmPass);
    return confirmed;
    }

let samePasswords = Compare(passWord, confirmPassWord)

if(samePasswords === 0) {
console.log("The passwords are the same")
} else {
    console.log("The passwords are not the same")
    }
