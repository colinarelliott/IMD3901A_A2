//this component will control the flow of the game and keep track of the score

AFRAME.registerComponent('game-manager' , { 

    //schema, contains player score data & game control data
    schema : {
        gameOn : {type: 'boolean', default: false},
        score : {type: 'number', default: 0},
        miss : {type: 'number', default: 0},
        targets : {type: 'number', default: 0},
        shots : {type: 'number', default: 0} 
    },

    //initialize event listeners
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.target = document.querySelector("#target");

        //when the first target is clicked, start the game
        CONTEXT_AF.target.addEventListener('mousedown', function() {
            gameTime = setInterval(CONTEXT_AF.createTarget, 1000); //create a new target every second
            CONTEXT_AF.data.gameOn = true; //set the gameOn flag to true
        });
    },

    tick: function () {
        //get the game manager, score display, laser, mouse raycaster, scene, and gun
        const CONTEXT_AF = this;
        CONTEXT_AF.scoreDisplay = document.querySelector("#score-display");
        CONTEXT_AF.laser = document.querySelector("#laser");
        CONTEXT_AF.mouseRaycaster = document.querySelector("#mouse-raycaster");
        CONTEXT_AF.scene = document.querySelector("#scene");
        CONTEXT_AF.gun = document.querySelector("#gun");

        //if the game has started, display the score. if the game has ended, display the final score
        if (CONTEXT_AF.data.gameOn === true) {
            //display the score
            CONTEXT_AF.scoreDisplay.setAttribute("text", "value: score: " + CONTEXT_AF.data.score);
        } else if (CONTEXT_AF.data.gameOn === false && CONTEXT_AF.data.targets >= 10){
            CONTEXT_AF.scoreDisplay.setAttribute("text", 
                "value: " + CONTEXT_AF.data.score + " / " + CONTEXT_AF.data.targets + " targets hit! \n\n" 
                + CONTEXT_AF.data.shots + " shots fired.");
        }

        //END OF GAME -> targets = 25
        if (CONTEXT_AF.data.targets >= 25 && CONTEXT_AF.data.gameOn === true) {

            //stop creating new targets
            clearInterval(gameTime);

            //remove all targets
            let allTargets = document.querySelectorAll(".shootMe");
            for (let i = 0; i < allTargets.length; i++) {
                allTargets[i].remove();
            }

            //reset the gun
            function endGame() {
                return new Promise(resolve => {
                    //swap the gun back to on the table
                    let copy = CONTEXT_AF.gun.cloneNode();
                    CONTEXT_AF.gun.remove();
                    CONTEXT_AF.scene.appendChild(copy);
                    CONTEXT_AF.gun = copy;
                    CONTEXT_AF.gun.setAttribute("position", "0.5 0.75 -1.5");
                    CONTEXT_AF.gun.setAttribute("rotation", "90 230 0");
                    CONTEXT_AF.gun.setAttribute("class", "interactable");
                    //display the final score
                    CONTEXT_AF.scoreDisplay.setAttribute("text", 
                    "value: " + CONTEXT_AF.data.score + " / " + CONTEXT_AF.data.targets + " targets hit! \n\n" 
                     + CONTEXT_AF.data.shots + " shots fired.");
                    //wait 1/10 of a second before returning
                    setTimeout(() => {resolve();}, 100);
                })
              }
            
            //and then end the game
            async function endGameAsync() {
                await endGame();
                //reset the raycaster and game manager, remove ability to shoot, set gameOn to false
                CONTEXT_AF.mouseRaycaster.setAttribute("raycaster", "far:20; interval: 100; objects: .interactable;");
                CONTEXT_AF.laser.setAttribute("raycaster", "far:20; interval: 100; objects: .interactable;");
                CONTEXT_AF.scene.removeAttribute("shoot-gun");
                CONTEXT_AF.data.score = 0;
                CONTEXT_AF.data.miss = 0;
                CONTEXT_AF.data.targets = 0;
                CONTEXT_AF.data.shots = 0;
                CONTEXT_AF.data.gameOn = false;
            } endGameAsync();
        }
    },

    updateSchema : function (evt) {
    },

    //create a new target function
    createTarget() {
        const CONTEXT_AF = document.querySelector("#game-manager").components["game-manager"];
        CONTEXT_AF.scene = document.querySelector("#scene");
        //create a new target every 0.5 seconds with a random position
        setTimeout(() => {
            //create a new target
            CONTEXT_AF.data.targets = CONTEXT_AF.data.targets + 1;
            let newTarget = document.createElement("a-entity");
            newTarget.setAttribute("id", "target" + Math.round(Math.random()*100000));
            newTarget.setAttribute("class", "shootMe");
            newTarget.setAttribute("gltf-model", "#target_model");
            newTarget.setAttribute("rotation", "0 180 0");
            newTarget.setAttribute("position", {x: Math.random() * 10 - 5, y: Math.random() * 5 +2, z: Math.random() *5 -15}); //spawn targets randomly in all three dimensions
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