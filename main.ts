let mySprite = 0
info.setLife(1e+87 % 600)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 3 . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . 3 3 . 3 . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . 3 . . . . 3 . . . . . . . 
    . . 3 . . . . . 3 3 . . . . . . 
    . 3 . . . . . . . 3 . . . . . . 
    . . 3 3 . . . . . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . f . f . f f . . f . . . . 2 
    2 . f f f f . . f . f . . 3 3 2 
    2 . f . f . f f . . f f f f . 3 
    2 . . . . . . . . . f . . f f 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . f . . f . . . . . . . 2 
    2 . . . . . . . . . . . f . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . f f . . . . 2 
    2 . . . f . . . . f . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy))
