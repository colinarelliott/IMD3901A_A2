
//attempting to make a script that allows you to switch the laser between hands by pressing the grip button

AFRAME.registerComponent('laser-swap',{
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.leftController = document.querySelector("#otc-left");
        CONTEXT_AF.rightController = document.querySelector("#otc-right");
        CONTEXT_AF.laserPosition = true;

        this.el.addEventListener('gripdown', this.swapLaser);
    },
    swapLaser: function (evt) {
        console.log(evt);
    }
});