let homecountEl = document.getElementById('home-count-el')
let homeCount =0
let guestcountEl = document.getElementById('guest-count-el')
let guestCount = 0

function addOneHome(){
    homeCount+=1
    homecountEl.textContent = homeCount
}
function addTwoHome(){
    homeCount+=2
    homecountEl.textContent = homeCount
}
function addThreeHome(){
    homeCount+=3
    homecountEl.textContent = homeCount
}
function addOneGuest(){
    guestCount+=1
    guestcountEl.textContent = guestCount
}
function addTwoGuest(){
     guestCount+=2
    guestcountEl.textContent = guestCount
}
function addThreeGuest(){
     guestCount+=3
    guestcountEl.textContent = guestCount
}