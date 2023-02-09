//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    schema : {
        gameOn : {type: 'boolean', default: false},
        score : {type: 'number', default: 0},
        miss : {type: 'number', default: 0},
        targets : {type: 'number', default: 0},
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.target = document.querySelector("#target");

        //when the first target is clicked, start the game
        CONTEXT_AF.target.addEventListener('click', function() {
            gameTime = setInterval(CONTEXT_AF.createTarget, 1000); //create a new target every second
            CONTEXT_AF.data.gameOn = true;
        });
    },

    tick: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.scoreDisplay = document.querySelector("#score-display");
        if (CONTEXT_AF.data.gameOn === true) {
            //display the score
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: score: " + CONTEXT_AF.data.score + " | miss: " + CONTEXT_AF.data.miss);
        } else {
            //display the final score
            //CONTEXT_AF.scoreDisplay.setAttribute("text", "value: final score: " + CONTEXT_AF.data.score);
        }
        

        //end of game - targets = 50
        if (CONTEXT_AF.data.targets >= 50 ) {
            //stop creating new targets
            clearInterval(gameTime);
            //remove all targets
            var allTargets = document.querySelectorAll(".shootMe");
            for (var i = 0; i < allTargets.length; i++) {
                allTargets[i].remove();
            }
            //stop the game
            CONTEXT_AF.data.gameOn = false;
            //display the final score
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: " + CONTEXT_AF.data.score + " / " + CONTEXT_AF.data.targets + " targets hit! \n\n" + CONTEXT_AF.data.miss + " targets missed.");
            
        }
    },

    createTarget() {
        const CONTEXT_AF = document.querySelector("#game-manager").components["game-manager"];
        CONTEXT_AF.scene = document.querySelector("#scene");
        //create a new target every 0.5 seconds with a random position
        setTimeout(() => {
            //create a new target
            CONTEXT_AF.data.targets = CONTEXT_AF.data.targets + 1;
            var newTarget = document.createElement("a-entity");
            newTarget.setAttribute("id", "target" + Math.round(Math.random()*100000));
            newTarget.setAttribute("class", "shootMe");
            newTarget.setAttribute("gltf-model", "#target_model");
            newTarget.setAttribute("rotation", "0 180 0");
            newTarget.setAttribute("position", {x: Math.random() * 10 - 5, y: Math.random() * 5 +2, z: Math.random() *5 -15});
            //add the target to the scene
            CONTEXT_AF.scene.appendChild(newTarget);
            setTimeout(() => {
                //remove the target after 1 second
                newTarget.remove();
                CONTEXT_AF.data.miss = CONTEXT_AF.data.miss + 1;
            }, 1000);
        }, 200);
    }
});