AFRAME.registerComponent('collision-check', {
    dependencies: ['raycaster'],
  
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.isTarget = false;

        CONTEXT_AF.el.addEventListener('raycaster-intersection', function (evt) {
            if (evt.detail.els[0].classList.contains('shootMe')) {
                console.log('shootable object intersected');
                CONTEXT_AF.isTarget = true;
            } else {
                console.log('not a collidable object');
                CONTEXT_AF.isTarget = false;
            }
        });
        CONTEXT_AF.el.addEventListener('raycaster-intersection-cleared', function() {
            console.log('exited object');
        });
    }
  });