input.onGesture(Gesture.Shake, function () {
    if (pop >= 50) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        pop += randint(0, 4)
        basic.showLeds(`
            . . . # .
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            `)
        basic.showLeds(`
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            . . . . .
            `)
    }
})
let pop = 0
pop = 0
basic.forever(function () {
	
})
