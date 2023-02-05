AFRAME.registerComponent('collision-check', {
    dependencies: ['raycaster'],

    schema: {
        isTarget: {type: 'boolean', default: false},
        currentIntersected: {type: 'string', default: null}
    },
  
    init: function () {
        const CONTEXT_AF = this;

        CONTEXT_AF.el.addEventListener('raycaster-intersection', function (evt) {
            if (evt.detail.els[0].classList.contains('shootMe')) {
                console.log('shootable object intersected');
                CONTEXT_AF.data.isTarget = true;
                CONTEXT_AF.data.currentIntersected = evt.detail.els[0].id;
                console.log(CONTEXT_AF.data.currentIntersected);
            } else {
                console.log('not a collidable object');
                CONTEXT_AF.data.isTarget = false;
                CONTEXT_AF.data.currentIntersected = null;
                console.log("nothing");
            }
        });
        CONTEXT_AF.el.addEventListener('raycaster-intersection-cleared', function() {
            console.log('raycaster intersection cleared');
            CONTEXT_AF.data.isTarget = false;
            CONTEXT_AF.data.currentIntersected = null;
            console.log("nothing");
        });
    }
  });