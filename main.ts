basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showString("Verdadero")
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.clearScreen()
        }
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showString("Falso")
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.clearScreen()
        }
    }
})
