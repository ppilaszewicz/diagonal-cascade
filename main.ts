input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 7; index++) {
        led.unplot(0, 0)
        x = 0
        y = index + 1
        while (y >= 0 && x <= 4) {
            led.toggle(x, y)
            y += -1
            x += 1
            basic.pause(10)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(0, 0)
    basic.pause(100)
    led.toggle(0, 1)
    led.toggle(1, 0)
    basic.pause(100)
    led.toggle(2, 0)
    led.toggle(1, 1)
    led.toggle(0, 2)
    basic.pause(100)
    led.toggle(3, 0)
    led.toggle(2, 1)
    led.toggle(1, 2)
    led.toggle(0, 3)
    basic.pause(100)
    led.toggle(4, 0)
    led.toggle(3, 1)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(0, 4)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 7; index++) {
        led.plot(0, 0)
        x = 0
        y = index + 1
        while (y >= 0 && x <= 4) {
            led.plot(x, y)
            y += -1
            x += 1
            basic.pause(10)
        }
    }
})
let y = 0
let x = 0
let index = 0
basic.forever(function () {
	
})
