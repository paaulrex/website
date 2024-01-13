import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Database info
const appSetting = {
    databaseURL: "https://post-something-dc3ba-default-rtdb.firebaseio.com/"
} 

// Database connection
const app = initializeApp(appSetting)
const database = getDatabase(app)
const postDatabase = ref(database, "Post")

// Retrieving info from HTML
const userMessage = document.querySelector('.user-msg')
const msgFrom = document.querySelector('.user-from')
const msgTo = document.querySelector('.user-to')
const postButton = document.querySelector('.post-msg')
const msgList = document.querySelector('.prev-post')

postButton.addEventListener("click", function() {
    // Retrieve written message
    let message = userMessage.value
    let from = msgFrom.value
    let to = msgTo.value

    // If else statements for when values are 0 and will not post until all 3 input boxes are filled
    if (message.length === 0 && from.length === 0 && to.length === 0) {
        alert("Can you at least fill out something? Anything? 😒")
    }
    else if (message.length === 0 && from.length === 0 && to.length > 0) {
        alert("So.. we're just gonna fill out the WHO part, but not the WHAT and the FROM??? 🤦🏽‍♂️")
    }
    else if (message.length === 0 && to.length === 0 && from.length > 0){
        alert("Sooo... What message are we sending and to who?? 💀")
    }
    else if (from.length === 0 && to.length === 0 && message.length > 0) {
        alert("Sooo... who are we sending this to .. ? And who are you again? 🤔")
    }
    else if (message.length === 0) {
        alert("Where's the message? 👀")
    }
    else if (from.length === 0) {
        alert("Who is it from .. ? 😒")
    }
    else if (to.length === 0) {
        alert("What's the point of writing a message without a recipient??? 🤦🏽‍♂️")
    }
    else {
    // Insert value into database
    push(postDatabase, {
        0: "To " + to,
        1: message,
        2: "From " + from,
    })

    clearMsgBox()
}})

onValue(postDatabase, function(snap) {
    if (snap.exists()) {
        let msgArray = Object.entries(snap.val())

    clearMsgField()

    for (let i = 0; i < msgArray.length; i++) {
        let msgArray2 = msgArray[i]
        let previousPost = Object.values(msgArray2[1])
        addPostInList(previousPost)
    }}
    else {
        msgList.innerHTML = "There are no posts here yet .."
    }
})

function clearMsgField() {
    msgList.innerHTML = ""
}

function clearMsgBox() {
    userMessage.value = ""
    msgFrom.value = ""
    msgTo.value = ""
}



function addPostInList(prevMsg) {
    let newUl = document.createElement('ul')
    newUl.className = "post-items"
    msgList.append(newUl)
    for (let x = 0; x < prevMsg.length; x++) {
        let recentPost = document.createElement('li')
        recentPost.innerText = prevMsg[x]
        newUl.append(recentPost)
    }
}