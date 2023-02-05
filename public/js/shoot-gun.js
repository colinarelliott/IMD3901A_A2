//this script handles shooting the gun and destroying targets based on collision-detection.js, WORKING!

AFRAME.registerComponent('shoot-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;
        //get the gun, camera, player laser, and initial target
        CONTEXT_AF.gun = document.querySelector("#gun");
        CONTEXT_AF.camera = document.querySelector("#camera");
        CONTEXT_AF.pLaser = document.querySelector("#player-laser-wrapper");
        CONTEXT_AF.target = document.querySelector("#target");

        //when the user clicks the trigger
        CONTEXT_AF.el.addEventListener('click', function() {
            CONTEXT_AF.gun.components.sound.playSound();

            //check to see if user is using Quest or not
            if (navigator.userAgent.includes("Quest") === true) {
                //code for quest collision detection check
            } else {
                //if the collided object is a target
                if (CONTEXT_AF.camera.components['collision-check'].data.isTarget === true) {
                    //remove the target
                    CONTEXT_AF.target = document.querySelector("#" + CONTEXT_AF.camera.components['collision-check'].data.currentIntersected);
                    CONTEXT_AF.target.remove();
                }
            } 
        });
    }
});