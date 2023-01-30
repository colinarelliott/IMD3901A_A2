AFRAME.registerComponent('collision-check', {
    dependencies: ['raycaster'],
  
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.isTarget = false;

        CONTEXT_AF.el.addEventListener('raycaster-intersection', function () {
            console.log('collidable object intersected');
            CONTEXT_AF.isTarget = true;
        });
        CONTEXT_AF.el.addEventListener('raycaster-intersection-cleared', function() {
            console.log('collidable object lost');
            CONTEXT_AF.isTarget = false;
        });
    }
  });