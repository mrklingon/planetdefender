function doMissle () {
    missle = game.createSprite(defender.get(LedSpriteProperty.X), 4)
    missle.set(LedSpriteProperty.Direction, 0)
    for (let index = 0; index < 4; index++) {
        missle.move(1)
        basic.pause(100)
        if (missle.isTouching(rock2)) {
            rock2.delete()
            game.addScore(5)
            basic.pause(100)
            rock2 = game.createSprite(randint(0, 4), randint(0, 4))
        }
        if (missle.isTouching(rock1)) {
            rock1.delete()
            game.addScore(5)
            basic.pause(100)
            rock1 = game.createSprite(randint(0, 4), randint(0, 4))
        }
    }
    missle.delete()
}
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (defender.get(LedSpriteProperty.X) > 0) {
        defender.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    doMissle()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Eighth))
    if (defender.get(LedSpriteProperty.X) < 4) {
        defender.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    droid += 1
    if (droid > 1) {
        droid = 0
    }
})
let rock1: game.LedSprite = null
let rock2: game.LedSprite = null
let missle: game.LedSprite = null
let defender: game.LedSprite = null
let droid = 0
droid = 0
defender = game.createSprite(2, 4)
game.setLife(10)
basic.forever(function () {
    basic.pause(2000)
    while (true) {
        rock1 = game.createSprite(randint(0, 4), randint(0, 4))
        rock1.turn(Direction.Right, randint(0, 359))
        while (!(rock1.isTouchingEdge())) {
            rock1.move(1)
            basic.pause(300)
            if (rock1.isTouching(defender)) {
                game.removeLife(1)
            }
        }
        rock1.delete()
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
            if (rock2.isTouching(defender)) {
                game.removeLife(1)
            }
        }
        rock2.delete()
    }
})
basic.forever(function () {
    if (droid == 1) {
        defender.set(LedSpriteProperty.X, rock1.get(LedSpriteProperty.X))
        doMissle()
        basic.pause(100)
        defender.set(LedSpriteProperty.X, rock2.get(LedSpriteProperty.X))
        doMissle()
        basic.pause(100)
    }
})
