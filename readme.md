# IMD3901A (Design Studio 3) - Assignment 2 - Multi-Platform Interactions
**Colin Elliott - 101073994**

---

#### Prompt:
This repository contains code for an assignment related to one of my university courses. It's an A-Frame NodeJS application "that allows for the selection, manipulation, and release of VR elements that emit sound across at two different platforms (i.e., mobile and desktop or HMD) using WebXR."

---

## Reflection:
For this assignment I decided to make a simple target practice game. I started out by getting a basic A-Frame scene in place with an environment component, then modeled two simple things: the gun and the target. From here I worked almost entirely in JS to build 5 custom components that facilitate the game.

1. **pickup-gun.js**: facilitates the ability to pickup (and put back, after round over) the gun from the bench
2. **shoot-gun.js**: facilitates the ability to shoot the gun during gameplay. Plays sounds, etc.
3. **collision-check.js**: checks to see if the raycaster is intersecting with the target, set a boolean variable in the schema
4. **game-manager.js**: runs the gameplay section, tracks statistics and resets the game after end
5. **laser-swap.js**: (for Quest only) allows the raycaster laser to swap back and forth between hands, WIP

#### Gameplay Description:
The game starts with a gun on a table in front of the user and a single target downrange. The game instructs the user to pick up the gun. Once the gun is picked up, music starts and the game instructs the user to shoot the target. Once the target is shot, the game begins and targets start spawning at random down range. Shoot the targets to get points. Try to shoot them in the least amount of shots possible! Once the game ends (after 50 targets), the gun will be placed back on the table prompting the user to once again pick it up to try again.

## Challenges & Successes:
I spent a long time integrating these features. Some of the hardest included the game manager's flow, accessing data between scripts, and just generally relearning best practices for JS and learning A-Frame. However, considering all of the challenges and time, I would say that most of it is just growing pains of learning A-Frame. I am feeling generally very pleased by the simplicity of programming with A-Frame and NodeJS as well as how similar to the web-development workflow it is. 