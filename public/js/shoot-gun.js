AFRAME.registerComponent('shoot-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.gun = document.querySelector("#gun");

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log("bang!");
            CONTEXT_AF.gun.components.sound.playSound();
        });
    }
});