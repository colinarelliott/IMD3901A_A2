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

        //when the user clicks the trigger
        CONTEXT_AF.el.addEventListener('click', function() {
            //if the collided object is a target
            if (CONTEXT_AF.camera.components['collision-check'].data.isTarget === true) {
                //play the hit sound, remove the target, and start the game
                CONTEXT_AF.hitSound.components.sound.playSound();
                CONTEXT_AF.target = document.querySelector("#target");
                CONTEXT_AF.target.remove();
                CONTEXT_AF.gameManager.components['game-manager'].data.gameOn = true;
                
                console.log("game started");
            } else {
                //play the gun sound
                CONTEXT_AF.gun.components.sound.playSound();
            }
        });
    }
});