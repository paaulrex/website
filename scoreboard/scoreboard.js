let homeScorePt = document.querySelector('#home-pts')
let awayScorePt = document.querySelector('#away-pts')

let scoreHome = 0
let scoreAway = 0

homeFoul = 0
awayFoul = 0

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
    awayFoul = 0
    homeFoul = 0
    document.querySelectorAll('#dot').forEach(i => i.style='')
}


// Foul changing from transparent to red

function foulHome() {
    homeFoul += 1
    let foul1 = document.querySelector('.hof1')
    foul1.style.backgroundColor = 'purple'
    if (homeFoul == 2) {
        let foul2 = document.querySelector('.hof2')
        foul2.style.backgroundColor = 'purple'
    }
    if (homeFoul == 3) {
        let foul3 = document.querySelector('.hof3')
        foul3.style.backgroundColor = 'purple'
    }
    if (homeFoul == 4) {
        let foul4 = document.querySelector('.hof4')
        foul4.style.backgroundColor = 'purple'
    }
    if (homeFoul > 4) {
        homeFoul = 4
        alert(`You can't add anymore fouls for this quarter!`)
    }
}

function foulAway() {
    awayFoul += 1
    let foul1 = document.querySelector('.awf1')
    foul1.style.backgroundColor = 'purple'
    if (awayFoul == 2) {
        let foul2 = document.querySelector('.awf2')
        foul2.style.backgroundColor = 'purple'
    }
    if (awayFoul == 3) {
        let foul3 = document.querySelector('.awf3')
        foul3.style.backgroundColor = 'purple'
    }
    if (awayFoul == 4) {
        let foul4 = document.querySelector('.awf4')
        foul4.style.backgroundColor = 'purple'
    }
    if (awayFoul > 4) {
        awayFoul = 4
        alert(`You can't add anymore fouls for this quarter!`)
    }
}