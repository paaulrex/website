import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Change this databaseURL to your own
const appSetting = {
    databaseURL: "https://list-project-698d4-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const moviesListDB= ref(database, "movies")

const inputFieldEl = document.getElementById("input-fld")
const addButtonEl = document.getElementById("add-btn")
const moviesList = document.getElementById("movies-list")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    // Inserts value into database
    push(moviesListDB, inputValue)

    // Logs out what was entered
    console.log(`${inputValue} added to database`)
    
    clearInputField()
})

onValue(moviesListDB, function(snapshot) {
    // if and else statement to prevent errors and display correct info
    if (snapshot.exists()) {
    let moviesArray = Object.entries(snapshot.val())

    clearMoviesList()

    for (let i = 0; i < moviesArray.length; i++) {
        let newestMoviesList = moviesArray[i]
        
        addMoviesList(newestMoviesList)
    }}
    else {
        moviesList.innerHTML = "Add Movies into your watchlist!"
    }
})

function clearMoviesList() {
    moviesList.innerHTML = ""
}

// Clears value back to placeholder
function clearInputField() {
    inputFieldEl.value = ""
}

// Adds item into list
function addMoviesList(movies) {
    let moviesID = movies[0]
    let moviesVal = movies[1]

    let newMoviesList = document.createElement("li")

    newMoviesList.textContent = moviesVal

    newMoviesList.addEventListener("dblclick", function() {
        let moviesLocation = ref(database, `movies/${moviesID}`)
        
        // Removes item from list and database
        remove(moviesLocation) 
    })

    moviesList.append(newMoviesList)
}

