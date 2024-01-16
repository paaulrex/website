const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
"@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
"|",":",";","<",">",".","?","/"]

const noSymbolCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const noNumberCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lettersOnlyCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z"]

const pwdOne = document.querySelector('.pwd1')
const pwdTwo = document.querySelector('.pwd2')
const pwdLengthText = document.querySelector('#pwd-length-value')
const pwdLength = document.querySelector('#pwd-length')

pwdLength.addEventListener("input", (event) => {
    pwdLengthText.textContent = event.target.value;
})

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * allCharacters.length)
    return allCharacters[randomChar]
}

function generatePassword() {
    let randomPwdOne = ""
    let randomPwdTwo = ""
    for (let i = 0; i < pwdLength.value; i++) {
        randomPwdOne += getRandomCharacter()
        randomPwdTwo += getRandomCharacter()         
    }
    pwdOne.textContent = randomPwdOne
    pwdTwo.textContent = randomPwdTwo
}

pwdOne.addEventListener('click', function() {
    let copyText = pwdOne.textContent;
    navigator.clipboard.writeText(copyText)

    let copiedMsg = document.querySelector(".copied-tooltip")
    copiedMsg.style.display = "inline";
    copiedMsg.textContent = "< Successfully Copied Password"
    setTimeout( function() {
        copiedMsg.style.display = "none";
    }, 3000);
})

pwdTwo.addEventListener('click', function() {
    let copyText = pwdTwo.textContent;
    navigator.clipboard.writeText(copyText)

    let copiedMsg = document.querySelector(".copied-tooltip")
    copiedMsg.style.display = "inline";
    copiedMsg.textContent = "Successfully Copied Password >"
    setTimeout( function() {
        copiedMsg.style.display = "none";
    }, 3000);
})