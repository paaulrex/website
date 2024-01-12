import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Change this databaseURL to your own
const appSetting = {
    databaseURL: "https://list-project-698d4-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const videoGamesListDB= ref(database, "video-games")

const inputFieldEl = document.getElementById("input-fld")
const addButtonEl = document.getElementById("add-btn")
const videoGamesList = document.getElementById("video-games-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Inserts value into database
    push(videoGamesListDB, inputValue)

    // Logs out what was entered
    console.log(`${inputValue} added to database`)
    
    clearInputField()
})

onValue(videoGamesListDB, function(snapshot) {
    // if and else statement to prevent errors and display correct info
    if (snapshot.exists()) {
    let videoGamesArray = Object.entries(snapshot.val())

    clearVideoGamesList()

    for (let i = 0; i < videoGamesArray.length; i++) {
        let newestVideoGameList = videoGamesArray[i]
        
        addVideoGamesList(newestVideoGameList)
    }}
    else {
        videoGamesList.innerHTML = "Add Video Games into your playlist!"
    }
})

function clearVideoGamesList() {
    videoGamesList.innerHTML = ""
}

// Clears value back to placeholder
function clearInputField() {
    inputFieldEl.value = ""
}

// Adds item into list
function addVideoGamesList(videoGames) {
    let videoGamesID = videoGames[0]
    let videoGamesVal = videoGames[1]

    let newVideoGamesList = document.createElement("li")

    newVideoGamesList.textContent = videoGamesVal

    newVideoGamesList.addEventListener("dblclick", function() {
        let videoGamesLocation = ref(database, `video-games/${videoGamesID}`)
        
        // Removes item from list and database
        remove(videoGamesLocation) 
    })

    videoGamesList.append(newVideoGamesList)
}

