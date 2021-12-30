function doMissle () {
    missle = game.createSprite(defender.get(LedSpriteProperty.X), 4)
    missle.set(LedSpriteProperty.Direction, 0)
    for (let index = 0; index < 4; index++) {
        missle.move(1)
        basic.pause(100)
        if (missle.isTouching(rock2)) {
            rock2.delete()
            game.addScore(5)
        }
        if (missle.isTouching(rock1)) {
            rock1.delete()
            game.addScore(5)
        }
    }
    missle.delete()
}
input.onButtonPressed(Button.AB, function () {
    doMissle()
})
let rock1: game.LedSprite = null
let rock2: game.LedSprite = null
let missle: game.LedSprite = null
let defender: game.LedSprite = null
let droid = 0
defender = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(2000)
    while (true) {
        rock1 = game.createSprite(randint(0, 4), randint(0, 4))
        rock1.turn(Direction.Right, randint(0, 359))
        while (!(rock1.isTouchingEdge())) {
            rock1.move(1)
            basic.pause(300)
        }
    }
})
basic.forever(function () {
    basic.pause(2000)
    while (true) {
        rock2 = game.createSprite(randint(0, 4), randint(0, 4))
        rock2.turn(Direction.Right, randint(0, 359))
        while (!(rock2.isTouchingEdge())) {
            rock2.move(1)
            basic.pause(200)
        }
    }
})
