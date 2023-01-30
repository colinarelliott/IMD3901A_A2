AFRAME.registerComponent('shoot-gun',{
    schema : {
    },

    init: function () {
        const CONTEXT_AF = this;

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log("bang!");
        });
        
    }
});