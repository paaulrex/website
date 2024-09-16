
let playerCards = []
let dealerCards = []
let sum = 0
let dSum = 0
let hasBlackJack = false
let isAlive = false
let player = {
    name: "Player",
    chips: 150
}
let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.querySelector("#player-cards")
let playerEl = document.querySelector("#player-el")
let dealerEl = document.querySelector("#dealer-cards")

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
    let dFirstCard = getRandomCard()
    let dSecondCard = getRandomCard()
    playerCards = [firstCard, secondCard]
    dealerCards = [dFirstCard, dSecondCard]
    sum = firstCard + secondCard
    dSum = dFirstCard + dSecondCard
    player.chips -= 10
    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    dealerEl.textContent = "Dealer: "
    for (let i = 0; i < playerCards.length; i++) {
        cardsEl.textContent += playerCards[i] + " "
    }
    dealerEl.textContent += " ?? " + dealerCards[1]
    sumEl.textContent = "Result " + sum + " (You) | ?? + " + dealerCards[1] + " (Dealer)"

    if (dealerCards[0] + dealerCards [1] === 21) {
        messageEl.textContent = "Player BUST"
    }

    if (sum < 21) {
        message = "Hit/Pass?"
    } else if (sum === 21) {
        message = "Winner Winner, Chicken Dinner!"
        hasBlackJack = true
        player.chips += 50
        playerEl.textContent = player.name + ": $" + player.chips
        isAlive = false
        revealDealer()
    } else {
        message = "Wow, you suck!"
        isAlive = false
    }
    messageEl.textContent = message
}

function hitCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        playerCards.push(card)
        sum += card
        renderGame()
    }
}

function revealDealer() {
    dealerEl.textContent = "Dealer: "
    for (let i = 0; i < dealerCards.length; i++) {
        dealerEl.textContent += dealerCards[i] + " "
    }
    sumEl.textContent = "Result " + sum + " (You) | " + dSum + " (Dealer)"
    if (dSum == sum) {
        message = "PUSH!"
        player.chips += 10
    } else if (dSum < sum) {
        message = "You WON!"
        player.chips += 20
        if (dSum < 17) {
            let dCard = getRandomCard()
            dealerCards.push(dCard)
            dSum += dCard
        }
    } else {
        message = "Sorry Bud!"
        isAlive = false
    }
    playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = message
}

function standCard() {
    if (isAlive === true) {
        revealDealer()
    }
}
