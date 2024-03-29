const showAboutMe = document.querySelector('#p1')
const showGithub = document.querySelector('#p2')
const showLinkedIn = document.querySelector('#p3')
const showFootnote = document.querySelector('#p4')
const mainShow = document.querySelector('.main-section')
const aboutMeSection = document.querySelector('.about-me')

function showMore() {
    mainShow.style.display = "none"
    aboutMeSection.style.display = "block"
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerwidth < 800) {
        const footer = document.querySelector('footer')
        footer.style.position = "relative"
    } else {

    }
}

function backToMain() {
    mainShow.style.display = "flex"
    aboutMeSection.style.display = "none"
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerwidth < 800) {
        const footer = document.querySelector('footer')
        footer.style.position = "absolute"
    } else {

    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

} else {
    showAboutMe.onmouseover = function() {
        showAboutMe.innerHTML = "About Me"
    }

    showAboutMe.onmouseout = function () {
        showAboutMe.innerHTML = `Hi <span class="mobile-view-text">// About Me</span>`
    }

    showGithub.onmouseover = function() {
        showGithub.innerHTML = "GitHub"
    }

    showGithub.onmouseout = function() {
        showGithub.innerHTML = `I'm <span class="mobile-view-text">// GitHub</span>`
    }

    showLinkedIn.onmouseover = function() {
        showLinkedIn.innerHTML = "LinkedIn"
    }

    showLinkedIn.onmouseout = function() {
        showLinkedIn.innerHTML = `Paul <span class="mobile-view-text">// LinkedIn</span>`
    }

    showFootnote.onmouseover = function() {
        showFootnote.innerHTML = "If you're a millenial, you probably said it like the monkey in Jimmy Neutron credits. 👀"
        showFootnote.style.color = "whitesmoke"
    }

    showFootnote.onmouseout = function() {
        showFootnote.innerHTML = "---------------------------------"
        showFootnote.style.color = "transparent"
    }
}