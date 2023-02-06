//this component is attached to the parent of each raycaster element and will check for collisions with objects that have the class "shootMe"

AFRAME.registerComponent('collision-check', {
    dependencies: ['raycaster'],

    schema: {
        //data for the component to know if it's intersecting a target and which one
        isTarget: {type: 'boolean', default: false},
        currentIntersected: {type: 'string', default: null}
    },
  
    init: function () {
        const CONTEXT_AF = this;

        //on raycaster intersection, check to see if the intersected object has the class "shootMe"
        CONTEXT_AF.el.addEventListener('raycaster-intersection', function (evt) {
            if (evt.detail.els[0].classList.contains('shootMe')) {
                //set the isTarget flag to true and set the currentIntersected to the id of the intersected object
                CONTEXT_AF.data.isTarget = true;
                CONTEXT_AF.data.currentIntersected = evt.detail.els[0].id;
                console.log('target intersected');
            } else {
                //set the isTarget flag to false and set the currentIntersected to null
                CONTEXT_AF.data.isTarget = false;
                CONTEXT_AF.data.currentIntersected = null;
                console.log('not a target');
            }
        });
        //on raycaster intersection cleared, set the isTarget flag to false and set the currentIntersected to null
        CONTEXT_AF.el.addEventListener('raycaster-intersection-cleared', function() {
            CONTEXT_AF.data.isTarget = false;
            CONTEXT_AF.data.currentIntersected = null;
            console.log('target cleared');
        });
    }
  });