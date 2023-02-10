//this script handles shooting the gun and destroying targets based on collision-detection.js, WORKING!

AFRAME.registerComponent('shoot-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;
        //get the gun, camera, player laser, and initial target
        CONTEXT_AF.gun = document.querySelector("#gun");
        CONTEXT_AF.hitSound = document.querySelector("#hit-sound");
        CONTEXT_AF.camera = document.querySelector("#camera");
        CONTEXT_AF.pLaser = document.querySelector("#player-laser-wrapper");
        CONTEXT_AF.target = document.querySelector("#target");
        CONTEXT_AF.gameManager = document.querySelector("#game-manager");
        CONTEXT_AF.scene = document.querySelector("#scene");
        CONTEXT_AF.shootOnce = true;

        CONTEXT_AF.el.addEventListener('shoot', function() {
            //reset the shootOnce variable
            setTimeout(function() {
                CONTEXT_AF.shootOnce = true;
            }, 100);
        });

        //when the user clicks the mouse
        CONTEXT_AF.el.addEventListener('mousedown', function() {
            CONTEXT_AF.gameManager.components['game-manager'].data.shots += 1;
            //run this line of code only once
            if (CONTEXT_AF.shootOnce === true) {
                CONTEXT_AF.shootOnce = false;
                CONTEXT_AF.gun.emit('shoot');

                if (CONTEXT_AF.camera.components['collision-check'].data.isTarget === true) {
                    //play the hit sound, remove the target, and start the game
                    CONTEXT_AF.hitSound.components.sound.playSound(); //play the hit sound
                    CONTEXT_AF.target = document.querySelector("#" + CONTEXT_AF.camera.components['collision-check'].data.currentIntersected); //make sure the right target is selected
                    CONTEXT_AF.target.remove(); //remove the target
                    CONTEXT_AF.gameManager.components['game-manager'].data.score += 1; //update the score
                } else {
                    //play the gun sound (no hit)
                    CONTEXT_AF.gun.components.sound.playSound();
                }
            }
        });
    },

    remove : function () {
        //when shoot-gun is removed, remove the game-manager component as well to end gameplay
        CONTEXT_AF = this;
        CONTEXT_AF.gameManager = document.querySelector("#game-manager");
        CONTEXT_AF.gameManager.removeAttribute("game-manager");
    }
});