import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Change this databaseURL to your own
const appSetting = {
    databaseURL: "https://list-project-698d4-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const animeListinDB= ref(database, "anime")

const inputFieldEl = document.getElementById("input-fld")
const addButtonEl = document.getElementById("add-btn")
const animeListEl = document.getElementById("animeWL")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Inserts value into database
    push(animeListinDB, inputValue)

    // Logs out what was entered
    console.log(`${inputValue} added to database`)
    
    clearInputField()
})

onValue(animeListinDB, function(snapshot) {
    // if and else statement to prevent errors and display correct info
    if (snapshot.exists()) {
    let animeArray = Object.entries(snapshot.val())

    clearAnimeList()

    for (let i = 0; i < animeArray.length; i++) {
        let newestAnime = animeArray[i]
        
        addAnimeinList(newestAnime)
    }}
    else {
        animeListEl.innerHTML = "Add Anime into your watchlist!"
    }
})

function clearAnimeList() {
    animeListEl.innerHTML = ""
}

// Clears value back to placeholder
function clearInputField() {
    inputFieldEl.value = ""
}

// Adds item into list
function addAnimeinList(anime) {
    let animeID = anime[0]
    let animeVal = anime[1]

    let newAnimeList = document.createElement("li")

    newAnimeList.textContent = animeVal

    newAnimeList.addEventListener("dblclick", function() {
        let animeLocation = ref(database, `anime/${animeID}`)
        
        // Removes item from list and database
        remove(animeLocation) 
    })

    animeListEl.append(newAnimeList)
}

