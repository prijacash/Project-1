# Project-1

WireFrame - Pokemon Battle

Jimmy is walking through the deserted Hills of Playtans.  He must travel through this area to get to the Arctic Mountains where his girlfriend Julieann is held.  He is confronted by Brian, the Bully of the North.  Brian will not allow Jimmy to pass unless he beats him in a Pokemon Battle!! He must use this attacks to defeat Brian.  The first to lose all their health, perishes.  The last one standing, is the winner. - LET's BATTLE!

[Click here to play Pokemon Battle Game](https://prijacash.github.io/Project-1/) 

![wireframe](/media/pokemon_wireframe.png)


Tech Needed
- Javascript, CSS, HTML5, DOM-Manipulation Game

MVP
- Create Pokemon-like scenery
- Have two character Player 1 and CPU
- Both show a Health Screen
- Game Play to switch Turn
- Player 1 has 3 different Attacks
- Attacks will randomly rotate between 2-3 types of attacks
- Power of attack decreases over time
- CPU will attack at random of 3 attacks 
- First to lose health, dies
- Show Result of Winner


Stretch Goals
- Have ability to choose 4-5 characters
- Add music to the background
- Add music after win
- Make characters move when they attack
- Add sound effects when they win
- Use player vs player
- Player 1 has 3 different Attacks
- Level Recognition

Roadblocks 
- having a fun gameplay that feels competitive with pc
- using a random array of attack levels that makes it feel like a game
- add a feature to be stunned/dizzy too allow a better dynamic 

-----------------
Post Project Reflections:
- Had some difficulty figuring out how to delay CPU gameplay and where I should place that code. But I worked through that. 
- Figured out how to randomize between 3 numbers. to randomize an attack from the data set.
- Getting music and sound effects to play was fun
- Instead of writing 3 long functions for a each attack click, I wanted to make the code cleaner, so I spent a few days trying to solve for that.  Previously I had an an eventlistner, but it would always pace through to only use the 1st attack, even though the 2nd and 3rd buttons were clicked.  I needed to put in the condition if a particular class contains a specific class/id.  After this was solved, the game worked.
- While resetting, not only does the data reset, but I need to put the code to refresh the new data for the health.

Sources:

audio
https://downloads.khinsider.com/game-soundtracks/album/pokemon-ten-years-of-pokemon

data set
https://codepen.io/hollyos/pen/QNRXYK


https://www.w3schools.com/