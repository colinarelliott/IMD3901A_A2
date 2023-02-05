//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    schema : {
        gameOn : {type: 'boolean', default: false},
        score : {type: 'number', default: 0},
    },

    init: function () {
        const CONTEXT_AF = this;
    },

    tick: function () {
        const CONTEXT_AF = this;
        if (CONTEXT_AF.gameOn === true) 
        {
            //update the score display
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: score: " + CONTEXT_AF.data.score);

            //check to see if there are any targets left
            if (document.getElementsByClassName("shootMe").length === 0) {
                //if there are no targets left, end the game
                gameOn = false;
                //display the end screen
                //document.querySelector("#end-screen").setAttribute("visible", true);
                //display the final score
                //document.querySelector("#final-score").setAttribute("text", "value: " + CONTEXT_AF.data.score);
            }
        }
    }
});