//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    schema : {
        score : {type: 'number', default: 0},
    },

    init: function () {
        const CONTEXT_AF = this;
    },

    tick: function () {
    }
});