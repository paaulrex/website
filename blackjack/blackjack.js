
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
    sumEl.textContent = "Sum " + sum

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
    dealerEl.textContent = "Dealer: " + dealerCards[0] + " " + dealerCards[1]
    if (dSum < 17) {
        let dCard = getRandomCard()
        dealerCards.push(dCard)
        dSum += dCard   
        if (dSum > 21) {
            message = "Dealer BUST!"
            player.chips += 20
            playerEl.textContent = player.name + ": $" + player.chips
        }
    } if (dSum === 21 && sum === 21 || dSum === sum) {
        message = "Push!"
        player.chips += 10

    } else if (dSum < sum) {
        message = "Nice!"
        player.chips += 20
        playerEl.textContent = player.name + ": $" + player.chips
    } else if (dSum > sum) {
        message = "Player LOSE!"
        isAlive = false
    }
    messageEl.textContent = message
}

function standCard() {
    if (isAlive === true ) {
        revealDealer()
    }
}
