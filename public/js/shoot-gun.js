AFRAME.registerComponent('shoot-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.gun = document.querySelector("#gun");
        CONTEXT_AF.camera = document.querySelector("#camera");
        CONTEXT_AF.pLaser = document.querySelector("#player-laser-wrapper");

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log("bang!");
            CONTEXT_AF.gun.components.sound.playSound();

            //check to see if user is using Quest or not
            if (navigator.userAgent.includes("Quest") === true) {
                //code for quest collision detection check
            } else {
                if (CONTEXT_AF.camera.components['collision-check'].data.isTarget === true) {
                    console.log("hit target!");
                    var target = document.querySelector("#" + CONTEXT_AF.camera.components['collision-check'].data.currentIntersected);
                    target.setAttribute("visible", false);
                    target.classList.remove("shootMe");
                }
            }

            
        });
    }
});