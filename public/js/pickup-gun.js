//a script that allows you to pickup objects in the scene

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
            //CONTEXT_AF.gun.flushToDom(); recommended online but not working...
            var copy = CONTEXT_AF.gun.cloneNode();
            if (navigator.userAgent.includes("Quest") === true) {
                CONTEXT_AF.rCon.appendChild(copy);
                CONTEXT_AF.gun.setAttribute("visible", false);
                copy.setAttribute("position", "0 -0.1 0");
                copy.setAttribute("rotation", "0 90 -45");
            } else {
                CONTEXT_AF.camera.appendChild(copy);
                CONTEXT_AF.gun.setAttribute("visible", false);
                copy.setAttribute("position", "0.5 -0.25 -0.5");
                copy.setAttribute("rotation", "0 110 0");
            }
            CONTEXT_AF.holdingGun = true;
            setTimeout(() => {  
                CONTEXT_AF.scene.setAttribute("shoot-gun", "null");
                //CONTEXT_AF.gun.classList.remove(".interactable"); <- not working but need to remove gun's interactable attribute after picked up
            }, 500);
        });
        
    }
});