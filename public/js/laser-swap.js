//a script that allows you to switch the laser between hands by pressing the grip button

AFRAME.registerComponent('laser-swap',{
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.leftController = document.querySelector("#otc-left");
        CONTEXT_AF.rightController = document.querySelector("#otc-right");
        CONTEXT_AF.laser = document.querySelector("#laser");
        CONTEXT_AF.laserPosition = true; //true: right, false: left

        CONTEXT_AF.leftController.addEventListener('gripdown', this.leftLaser);
        CONTEXT_AF.rightController.addEventListener('gripdown', this.rightLaser);
    },
    leftLaser: function (evt) {
        if (laserPosition === true) {
            CONTEXT_AF.laser.components.laser_controls.hand = "right";
            laserPosition = false;
        }
    },

    rightLaser: function (evt) {
        if (laserPosition === false) {
            CONTEXT_AF.laser.components.laser_controls.hand = "left";
            laserPosition = true;
        }
    }
});