console.log('test')

// VARIABLES
window.addEventListener("DOMContentLoaded", () => {

    // Capture DOM Elements from page to store as variables
    let cpuHealth = document.querySelector('cpuHealth')
    let playerHealth = document.querySelector('playerHealth')
    let attack1 = document.querySelector('attack1')
    let attack2 = document.querySelector('attack2')
    let attack3 = document.querySelector('attack3')
    let displayMessage = document.querySelector('displayMessage')
    

    // display initial message
    message.innerText = "Player 1, goes first to attack"

    // SCOREBOARD

    let turnNum: 0
    let player1: [] // array of player attacks
    let cpu: [] // array of cpu attacks

    let player: 

    characters = [
        {
            name: "Charizard",
            image: "",
            hp: 
                {
                current: 500,
                total: 500
                } 
           
            attacks: [
                {
                    attackName: "Ember Fire",
                    hp: randomNum(60,30),
                    available:  10,
                    remaining: 10,
                },
                {
                    attackName: "Fire Spin",
                    hp: randomNum(45,12),
                    available:  10,
                    remaining: 10, 
                }
                {
                    attackName: "Blast Burn",
                    hp: randomNum(30,10),
                    available:  10,
                    remaining: 10,
                }
            ]
        }
        {
            name: "Snorlax"
            image: "",
            hp: 
                {
                    current: 500,
                    total: 500,
                }   
            attacks: [
                {
                    attackName: "Earthquake",
                    hp: randomNum(60,30),
                    available:  10,
                    remaining: 10,
                },
                {
                    attackName: "Heavy Slam",
                    hp: randomNum(45,12),
                    available:  10,
                    remaining: 10,  
                }
                {
                    attackName: "Skull Bash",
                    hp: randomNum(30,10),
                    available:  10,
                    remaining: 10,
                }
            ]
                
        }
    ]

    // FUNCTION: attackClicked() ---> starts
    function attackClick(event) {
        let gameCheck = event.target

            // decide who's turn it is.. player1 even, cpu odd
            if (turnNum % 2 === 0) {
                gameCheck.classList.add('player1')
                displayMessage.innerText = "Player 1's turn"
                turnNum++
            } else {
                gameCheck.classList.add('cpu')
                displayMessage.innerText = "CPU's turn"
                turnNum++
            }


    }
        // (total HP combatant) - (total attack points from attacker)
        // add

        // 1. check turn
        // 2. function to attack
        // 3. take HP of that guy
        // 4. update turn
        // repeat go back to one

    // random number generator for attacks
    function randomNum(max, min){
        if (min === undefined || min === '' || min === null) {
            min = 0
        }
        return Math.floor(Math.random() * (max-min) + min);
    }

    // FUNCTION: gameOver()
    function gameOver () {

    }
    //// check to see if there is a winner on each turn
    //// if player/cpu has won run stopGame()

    // FUNCTION: stopGame() --> doesnt allow further game play
})
