//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    schema : {
        gameOn : {type: 'boolean', default: false},
        score : {type: 'number', default: 0},
        onceLock : {type: 'boolean', default: true}
    },

    init: function () {
        const CONTEXT_AF = this;
    },

    tick: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.scoreDisplay = document.querySelector("#score-display");
        if (CONTEXT_AF.data.gameOn === true) 
        {
            //display the score
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: score: " + CONTEXT_AF.data.score);

            //start a countdown function that will create a new a-entity with text in the middle of the screen and display the countdown from 3 to 1
            if (CONTEXT_AF.onceLock === true) {
                CONTEXT_AF.countdown();
                console.log("countdown started");
                CONTEXT_AF.onceLock = false;
            }
            //check to see if there are any targets left
            /*if (document.getElementsByClassName("shootMe").length === 0) {
                //if there are no targets left, end the game
                gameOn = false;
                //display the end screen
                //document.querySelector("#end-screen").setAttribute("visible", true);
                //display the final score
                //document.querySelector("#final-score").setAttribute("text", "value: " + CONTEXT_AF.data.score);
            }*/
        }
    },

    remove: function (evt) {
        const CONTEXT_AF = this;
        //if this has the class "shootMe", remove it from the scene
        if (evt.target.classList.contains("shootMe")) {
            CONTEXT_AF.scene.removeChild(evt.target);
            //update the score
            CONTEXT_AF.data.score++;
        }
    }
});