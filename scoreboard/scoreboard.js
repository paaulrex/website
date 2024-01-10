let homeScorePt = document.querySelector('#home-pts')
let awayScorePt = document.querySelector('#away-pts')

let scoreHome = 0
let scoreAway = 0

function plus1Home() {
    scoreHome += 1
    homeScorePt.textContent = scoreHome
    if (scoreHome == 100) {
        scoreHome = 0
        homeScorePt.textContent = scoreHome
    }
}

function plus2Home() {
    scoreHome += 2
    homeScorePt.textContent = scoreHome
    if (scoreHome > 99) {
        scoreHome -= 100
        homeScorePt.textContent = scoreHome
    }
}

function plus3Home() {
    scoreHome += 3
    homeScorePt.textContent = scoreHome
    if (scoreHome > 99) {
        scoreHome -= 100
        homeScorePt.textContent = scoreHome
    }
}

function plus1Away() {
    scoreAway += 1
    awayScorePt.textContent = scoreAway
    if (scoreAway == 100) {
        scoreAway = 0
        awayScorePt.textContent = scoreAway
    }
}

function plus2Away() {
    scoreAway += 2
    awayScorePt.textContent = scoreAway
    if (scoreAway > 99) {
        scoreAway -= 100
        awayScorePt.textContent = scoreAway
    }
}

function plus3Away() {
    scoreAway += 3
    awayScorePt.textContent = scoreAway
    if (scoreAway > 99) {
        scoreAway -= 100
        awayScorePt.textContent = scoreAway
    }
}

function resetPts() {
    scoreAway = 0
    awayScorePt.textContent = scoreAway
    scoreHome = 0
    homeScorePt.textContent = scoreHome
}
