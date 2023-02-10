# IMD3901A (Design Studio 3) - Assignment 2 - Multi-Platform Interactions
**Colin Elliott - 101073994**

---

#### Prompt:
This repository contains code for an assignment related to one of my university courses. It's an A-Frame NodeJS application "that allows for the selection, manipulation, and release of VR elements that emit sound across at two different platforms (i.e., mobile and desktop or HMD) using WebXR."

---

## Reflection:

#### Introduction:
For this assignment I decided to make a simple target practice game. I started out by getting a basic A-Frame scene in place with an environment component, then modeled two simple things: the gun and the target. From here I worked almost entirely in JS to build 5 custom components that facilitate the game.

1. **pickup-gun.js**: facilitates the ability to pickup (and put back, after round over) the gun from the bench
2. **shoot-gun.js**: facilitates the ability to shoot the gun during gameplay. Plays sounds, etc.
3. **collision-check.js**: checks to see if the raycaster is intersecting with the target, set a boolean variable in the schema
4. **game-manager.js**: runs the gameplay section, tracks statistics and resets the game after end

#### Game Controls & Platforms:
- The game is played with only the mouse on PC and only tapping on a phone. Simply follow the instructions on screen and tap / click to play.
- The game can be played in browser on PC or on a Phone or Tablet. I have tested it on my PC, Mac, iPad and iPhone (using safari), chrome recommended though.

#### Gameplay Description:
The game starts with a gun on a table in front of the user and a single target downrange. The game instructs the user to pick up the gun. Once the gun is picked up, music starts and the game instructs the user to shoot the target. Once the target is shot, the game begins and targets start spawning at random down range. Shoot the targets to get points. Try to shoot them in the least amount of shots possible! Once the game ends (after 50 targets), the gun will be placed back on the table prompting the user to once again pick it up to try again.

#### Video Demonstration:
*[Link to Video Demo](https://youtu.be/rq5ql_oJ2Z0)*

#### Challenges & Successes:
Some of the hardest features to integrate included the game manager's flow, accessing data between scripts, and just generally relearning best practices for JS and learning A-Frame. My biggest challenge however, was integrating Meta Quest support. I couldn't seem to get the raycaster to work reliably on Quest and maybe I'm missing something but I ran out of time to integrate it in the end. For most of development I had a file called 'laser-swap.js' in the repository and I was going to use it to allow swapping the 'active hand' between the two Quest controllers and I also couldn't get this to work. On the bright side I have learned a few things about how the Quest interacts and will spend more time learning it for the term project. In the end, I decided that this project would be PC & Mobile only. I may come back in the future and add Quest support and more features though... it's kind of a fun game.

However, considering all of the challenges and time, I would say that most of it is just growing pains of learning A-Frame. I am feeling generally very pleased by the simplicity of programming with A-Frame and NodeJS as well as how similar to the web-development workflow it is. In other words, I'm enjoying myself!

#### How to run:
1. Clone repository
2. Install NodeJS
3. Open Folder in Terminal
4. ```npm install```
5. ```node app.js```
6. Navigate to http://localhost:8080 on your computer.

#### Sources:
- All sound effects & music are from my personal Epidemic Sound license
- All 3D models are made by me in Blender

