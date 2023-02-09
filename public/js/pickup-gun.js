//a script that allows you to pickup the gun object to start shooting, WORKING!

AFRAME.registerComponent('pickup-gun',{
    schema : {
        gunPos : {type: 'vec3', default: {x: 0.5, y: 0.75, z: -1.5}},
        gunRot : {type: 'vec3', default: {x: 90, y: 230, z: 0}},
    },

    init: function () {
        const CONTEXT_AF = this;
        //get the gun, camera, mouse raycaster, laser, scene, right controller and score display
        CONTEXT_AF.holdingGun = false;
        CONTEXT_AF.gun = document.querySelector("#gun");
        CONTEXT_AF.camera = document.querySelector("#camera");
        CONTEXT_AF.mouseRaycaster = document.querySelector("#mouse-raycaster");
        CONTEXT_AF.laser = document.querySelector("#laser");
        CONTEXT_AF.scene = document.querySelector("#scene");
        CONTEXT_AF.rCon = document.querySelector("#otc-right");
        CONTEXT_AF.scoreDisplay = document.querySelector("#score-display");

        CONTEXT_AF.el.addEventListener('click', function() {
            //make a copy of the gun
            var copy = CONTEXT_AF.gun.cloneNode();
            //check to see if user is using Quest or not
            if (navigator.userAgent.includes("Quest") === true) {
                //make the original gun invisible and add the copy to the right controller
                CONTEXT_AF.rCon.appendChild(copy);
                CONTEXT_AF.gun.remove();
                CONTEXT_AF.gun = copy;
                copy.setAttribute("position", "0 -0.1 0");
                copy.setAttribute("rotation", "0 90 -45");
            } else {
                //make the original gun invisible and add the copy to the camera
                CONTEXT_AF.camera.appendChild(copy);
                CONTEXT_AF.gun.remove();
                CONTEXT_AF.gun = copy;
                copy.setAttribute("position", "0.5 -0.25 -0.5");
                copy.setAttribute("rotation", "0 110 0");
            }
            CONTEXT_AF.holdingGun = true;
            //wait 500ms
            setTimeout(() => {  
                //remove held gun's interactability, add shoot-gun component to scene
                CONTEXT_AF.scene.setAttribute("shoot-gun", "null");
                CONTEXT_AF.gun.classList.remove("interactable");
                //update raycasters to shoot targets
                CONTEXT_AF.mouseRaycaster.setAttribute("raycaster", "far:80; interval: 12; objects: .shootMe;");
                CONTEXT_AF.laser.setAttribute("raycaster", "far:80; interval: 12; objects: .shootMe;");
            }, 500);
            //update score display with instructions
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: shoot the target to start!");


            //WIP BENCH FUNCTIONALITY
            if (CONTEXT_AF.holdingGun === true) {
                //if the bench is clicked, remove the gun and add it back to the scene
                CONTEXT_AF.el.addEventListener('click', function() {
                    CONTEXT_AF.scene.appendChild(CONTEXT_AF.gun);
                    CONTEXT_AF.gun.setAttribute("position", CONTEXT_AF.data.gunPos);
                    CONTEXT_AF.gun.setAttribute("rotation", CONTEXT_AF.data.gunRot);
                    CONTEXT_AF.holdingGun = false;
                    //update raycasters to not shoot targets
                    CONTEXT_AF.mouseRaycaster.setAttribute("raycaster", "far:80; interval: 12; objects: .interactable;");
                    CONTEXT_AF.laser.setAttribute("raycaster", "far:80; interval: 12; objects: .interactable;");
                    //remove shoot-gun component from scene
                    CONTEXT_AF.scene.removeAttribute("shoot-gun");
                    //update score display with instructions
                    CONTEXT_AF.scoreDisplay.setAttribute("text", "value: pick up the gun to start!");
                });
            }
        });
        
    }
});