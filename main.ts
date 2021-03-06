/**
 * At anytime, you can right-click on a block and select "help" for more info on the specific block and how it can be used.
 */
function Lolliepop6 () {
    Lollipop1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........33333.......
        .......3333333......
        .......3333333......
        ......333333333.....
        .......3333333......
        .......3333333......
        ........33333.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lollipop1.setPosition(randint(1, 160), randint(1, 160))
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    music.baDing.play()
})
function Lolliepop5 () {
    Lollipop1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........33333.......
        .......3333333......
        .......3333333......
        ......333333333.....
        .......3333333......
        .......3333333......
        ........33333.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lollipop1.setPosition(randint(1, 160), randint(1, 160))
}
function Lolliepop3 () {
    Lollipop1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........33333.......
        .......3333333......
        .......3333333......
        ......333333333.....
        .......3333333......
        .......3333333......
        ........33333.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lollipop1.setPosition(randint(1, 160), randint(1, 160))
}
// To comment in your JS, use the double /
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Lolliepop22.destroy(effects.hearts, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Lollipop1.destroy(effects.hearts, 1000)
})
function Lolliepop4 () {
    Lollipop1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........33333.......
        .......3333333......
        .......3333333......
        ......333333333.....
        .......3333333......
        .......3333333......
        ........33333.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lollipop1.setPosition(randint(1, 160), randint(1, 160))
}
function Lolliepop2 () {
    Lolliepop22 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........22222.......
        .......2222222......
        .......2222222......
        ......222222222.....
        .......2222222......
        .......2222222......
        ........22222.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lolliepop22.setPosition(randint(1, 160), randint(1, 160))
}
function Lolliepop () {
    Lollipop1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ........33333.......
        .......3333333......
        .......3333333......
        ......333333333.....
        .......3333333......
        .......3333333......
        ........33333.......
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ..........1.........
        ....................
        ....................
        `, SpriteKind.Food)
    Lollipop1.setPosition(randint(1, 160), randint(1, 160))
}
let Lolliepop22: Sprite = null
let Lollipop1: Sprite = null
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.splash("help me find my way to the donut", "Collet as many lollipops as you can! ")
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.setVelocity(70, 70)
controller.moveSprite(mySprite)
mySprite.startEffect(effects.trail)
scene.cameraFollowSprite(mySprite)
music.baDing.play()
Lolliepop()
Lolliepop2()
info.setScore(0)
