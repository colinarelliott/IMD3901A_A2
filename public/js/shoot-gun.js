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
                CONTEXT_AF.hitSound.components.sound.playSound();
                //remove the target
                console.log("target hit!")
                CONTEXT_AF.target.remove();

                //start the game
                //CONTEXT_AF.gameManager.setAttribute("game-manager", "gameOn: true");
            } else {
                CONTEXT_AF.gun.components.sound.playSound();
            }
        });
    }
});