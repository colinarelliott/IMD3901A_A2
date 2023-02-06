//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    schema : {
        gameOn : {type: 'boolean', default: false},
        score : {type: 'number', default: 0},
        targetNo : {type: 'number', default: 0},
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.target = document.querySelector("#target");

        CONTEXT_AF.target.addEventListener('click', function() {
            setInterval(CONTEXT_AF.createTarget, 1000);
        });
    },

    tick: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.scoreDisplay = document.querySelector("#score-display");
        if (CONTEXT_AF.data.gameOn === true) 
        {
            //display the score
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: score: " + CONTEXT_AF.data.score);


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

    createTarget() {
        const CONTEXT_AF = this;
        CONTEXT_AF.scene = document.querySelector("#scene");
        //create a new target every 0.5 seconds with a random position
        setTimeout(() => {
            //create a new target
            var newTarget = document.createElement("a-entity");
            //set the target's attributes
            console.log(CONTEXT_AF);
            //CONTEXT_AF.data.targetNo++;
            //newTarget.setAttribute("id", "target" + CONTEXT_AF.data.targetNo); 
            newTarget.setAttribute("id", "target" + Math.round(Math.random()*100000));
            newTarget.setAttribute("class", "shootMe");
            newTarget.setAttribute("gltf-model", "#target_model");
            newTarget.setAttribute("rotation", "0 180 0");
            newTarget.setAttribute("position", {x: Math.random() * 10 - 5, y: Math.random() * 5 +2, z: Math.random() *5 -15});
            //add the target to the scene
            CONTEXT_AF.scene.appendChild(newTarget);
        }, 1000);
    }
});