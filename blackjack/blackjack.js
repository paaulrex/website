
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let player = {
    name: "Paul",
    chips: 150
}
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    player.chips -= 10
    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum " + sum
    if (sum < 21) {
        message = "Hit/Pass?"
    } else if (sum === 21) {
        message = "Winner Winner, Chicken Dinner!"
        hasBlackJack = true
        player.chips += 50
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "Wow, you suck!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
