import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Change this databaseURL to your own
const appSetting = {
    databaseURL: "https://list-project-698d4-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const tvShowsListDB= ref(database, "tv-shows")

const inputFieldEl = document.getElementById("input-fld")
const addButtonEl = document.getElementById("add-btn")
const tvShowList = document.getElementById("tv-shows-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Inserts value into database
    push(tvShowsListDB, inputValue)

    // Logs out what was entered
    console.log(`${inputValue} added to database`)
    
    clearInputField()
})

onValue(tvShowsListDB, function(snapshot) {
    // if and else statement to prevent errors and display correct info
    if (snapshot.exists()) {
    let tvShowArray = Object.entries(snapshot.val())

    clearTVShowList()

    for (let i = 0; i < tvShowArray.length; i++) {
        let newestTVShows = tvShowArray[i]
        
        addTVShowList(newestTVShows)
    }}
    else {
        tvShowList.innerHTML = "Add TV Shows into your watchlist!"
    }
})

function clearTVShowList() {
    tvShowList.innerHTML = ""
}

// Clears value back to placeholder
function clearInputField() {
    inputFieldEl.value = ""
}

// Adds item into list
function addTVShowList(tvShows) {
    let tvShowID = tvShows[0]
    let tvShowVal = tvShows[1]

    let newTVShowList = document.createElement("li")

    newTVShowList.textContent = tvShowVal

    newTVShowList.addEventListener("dblclick", function() {
        let tvLocation = ref(database, `tv-show/${tvShowID}`)
        
        // Removes item from list and database
        remove(tvLocation) 
    })

    tvShowList.append(newTVShowList)
}

