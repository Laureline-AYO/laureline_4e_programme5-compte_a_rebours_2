input.onButtonPressed(Button.A, function () {
    while (nbre_depart > 0) {
        basic.showNumber(nbre_depart)
        basic.pause(1000)
        nbre_depart += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    nbre_depart = 0
    basic.showNumber(nbre_depart)
})
input.onButtonPressed(Button.B, function () {
    nbre_depart += 1
    basic.showNumber(nbre_depart)
})
let nbre_depart = 0
nbre_depart = 0
