
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/




/**
 * Custom blocks
 */
//% weight=100 color=#365c4f icon="\uf29a"
namespace testterr {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function makeSprite(): void {
        let mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . 1 1 . . . . . .
            . . . . . 1 1 1 1 1 . . . . . .
            . . . . 1 . . . . 1 . . . . . .
            . . . 1 . . . . . 1 . . . . . .
            . . 1 . 1 . . 1 . . 1 . . . . .
            . 1 . . . . . . . . 1 . . . . .
            1 1 . . . . . . . . . 1 . . . .
            1 . . 1 . . . 1 1 . . 1 . . . .
            1 . . 1 . . . 1 . . . . 1 . . .
            1 . . 1 . . 1 1 . . . 1 1 . . .
            . 1 . . 1 1 1 . 1 1 1 1 . . . .
            . . 1 1 1 1 1 1 1 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        controller.moveSprite(mySprite)
    }





    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 5
 * @param s describe parameter here, eg: "Hello"
 * @param e describe parameter here
 */
    //% block
    export function set_bg(): void {
        
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccccccfffffffffcccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffcccccccccccccccccccccccfffccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccccccccccccffffccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccdccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccdccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccdccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccdcccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccdcccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfcccccccccccccdcccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfcccccccccccccdcccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccc
            ccccccccccccfcccccccccccccdcccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfccccccccccccccdccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfcccccccccccccccdcccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfccccccccccccccccddcccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccfccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccfccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccfcccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccc
            cccccccccccccccfcccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccc
            cccccccccccccccfcccccccccccccccccccccccccccccccccfccccccccdcccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccfcccccccccccccccccccccccccccccccdfccccccccdccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccfcccccccccccccccccccccccccccccccdfccccccccdccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccfcccccccccccccccccccccccccccccccdfccccccccdccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccfccccccccccccccccccccccccccccccdcfcccccccdccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccfcccccccccccccccccccccccccccccdcccfccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccfccccccccccccccccccccccccccccdccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccfccccccccccccccccccccccccccccdcccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccfccccccccccccccccccccccccccccdccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccfcccccccccccccccccccccccccccdcccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccfccccccccccccccccccccccccccdcccccccccfccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccfcccccccccccccccccccccccccdccccccccccfccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccfccccccccccccccccccccccccdccccccccccccfcccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccfcccccccccccccccccccccccdcccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccfcccccccccccccccccccccdccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccfcccccccccccccccccccccdcccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccfcccccccccccccccccccdcccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccfccccccccccccccccccdcccccccccccccccccccccfccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccfccccccccccccccccdcccccccccccccccccccccccffccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccffcccccccccccccdccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccfcccccccccccdcccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccffccccccccdccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccfcccccccdccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccfccccccccccfccccccccccccccccccccccccccccccffccccdccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccffcccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccfcccccccccccccccccccccccccfdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccfcccccccccccccccccccccccccdffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccfcccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdcccccccccccfcccccccccccccccccccccccfcccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccddccccccccccccfcccccccccccccccccccccccfcccccccccccccccccccccccccccccfcccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccddccccccccccccfcccccccccccccccccccccccccfcccccccccccccccccccccccccccccffcccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccddcccccccccccccfcccccccccccccccccccccccccfcccccccccccccccccccccccccccccccfccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccffccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccffccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccffccccccccccccdccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccfccccccccccddccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccddccccccccccdcccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccdddccccccccccdccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccddcccccccccccccdccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfcdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccfccddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccffcccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    }





    /**
 * TODO: describe your function here
 * @param n describe parameter here, eg: 5
 * @param s describe parameter here, eg: "Hello"
 * @param e describe parameter here
 */
    //% block
    export function giveScore(num:number): void {
        if (num > 0) {
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            info.changeScoreBy(num)
        }    
        
    }


}
