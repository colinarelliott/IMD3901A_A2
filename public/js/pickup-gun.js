//a script that allows you to pickup objects in the scene, WORKING!

AFRAME.registerComponent('pickup-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.holdingGun = false;
        CONTEXT_AF.gun = document.querySelector("#gun");
        CONTEXT_AF.camera = document.querySelector("#camera");
        CONTEXT_AF.scene = document.querySelector("#scene");
        CONTEXT_AF.rCon = document.querySelector("#otc-right");

        CONTEXT_AF.el.addEventListener('click', function() {
            //make a copy of the gun
            var copy = CONTEXT_AF.gun.cloneNode();
            //check to see if user is using Quest or not
            if (navigator.userAgent.includes("Quest") === true) {
                //make the original gun invisible and add the copy to the right controller
                CONTEXT_AF.rCon.appendChild(copy);
                CONTEXT_AF.gun.setAttribute("visible", false);
                CONTEXT_AF.gun = copy;
                copy.setAttribute("position", "0 -0.1 0");
                copy.setAttribute("rotation", "0 90 -45");
            } else {
                //make the original gun invisible and add the copy to the camera
                CONTEXT_AF.camera.appendChild(copy);
                CONTEXT_AF.gun.setAttribute("visible", false);
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
            }, 500);
        });
        
    }
});