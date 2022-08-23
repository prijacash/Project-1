console.log('test')

// VARIABLES
window.addEventListener("DOMContentLoaded", () => {

    // Capture DOM Elements from page to store as variables
    let cpuHealth = document.querySelector('#cpuHealth')
    let playerHealth = document.querySelector('#playerHealth')
    let attack1 = document.querySelector('.attack1')
    let attack2 = document.querySelector('.attack2')
    let attack3 = document.querySelector('.attack3')
    let displayMessage = document.querySelector('.displayMessage')
    

    // display initial message
    displayMessage.innerText = 'Player 1, goes first to attack'

    // SCOREBOARD

    let turnNum = 0
    let player1, cpu; 

    const characters = [
        {
            name: "Charizard",
            image: "",
            hp: 
                {
                current: 500,
                total: 500
                }, 
           
            attacks: [
                {
                    attackName: "Ember Fire",
                    damage: randomNum(60,30),
                    available:  10,
                    remaining: 10,
                },
                {
                    attackName: "Fire Spin",
                    damage: randomNum(45,12),
                    available:  10,
                    remaining: 10, 
                },
                {
                    attackName: "Blast Burn",
                    damage: randomNum(30,10),
                    available:  10,
                    remaining: 10,
                },
            ],
        },
        {
            name: "Snorlax",
            image: "",
            hp: 
                {
                    current: 500,
                    total: 500,
                },   
            attacks: [
                {
                    attackName: "Earthquake",
                    damage: randomNum(60,30),
                    available:  10,
                    remaining: 10,
                },
                {
                    attackName: "Heavy Slam",
                    damage: randomNum(45,12),
                    available:  10,
                    remaining: 10,  
                },
                {
                    attackName: "Skull Bash",
                    damage: randomNum(30,10),
                    available:  10,
                    remaining: 10,
                },
            ],
                
        },
    ]

    // delare players to data set
    player1 = characters[0]
    cpu = characters[1]

    // display initial health bars
    playerHealth.innerText = `Player 1 ${player1.name} Health (${player1.hp.current} / ${player1.hp.total})`
    cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`

    // FUNCTION: attackClicked() ---> starts
    
    attack1.addEventListener("click", attackClick)
    attack2.addEventListener("click", attackClick)
    attack3.addEventListener("click", attackClick)


    function attackClick(event) {
        let gameCheck = event.target

            // 1. check turn. decide who's turn it is.. player1 even, cpu odd
            if (turnNum % 2 === 0) {
                gameCheck.classList.add('player1')
                displayMessage.innerText = "Player 1's turn"
                if (player1.hp.current > 0) { // which buttons being clicked, based the same button action
                    if (attack1) {
                        cpu.hp.current =  cpu.hp.current - player1.attacks[0].damage               
                    } else if (attack2) {
                        cpu.hp.current = cpu.hp.current - player1.attacks[1].damage
                    } else if (attack3) {
                        cpu.hp.current = cpu.hp.current - player1.attacks[2].damage
                    }
                    // reassign the HP
         
                } 

                turnNum++
            } else {
                gameCheck.classList.add('cpu')
                displayMessage.innerText = "CPU's turn"
                turnNum++
            }

            // 2. function to attack
            // first conditional check HP > 0
    

 
            // gameOver()
            // console.log('this game is over)
            
            // 3. take HP of that guy
            
            // (total HP combatant) - (total attack points from attacker)
            // 4. update turn
            // repeat go back to one

    }


    // random number generator for attacks
    function randomNum(max, min){
    if (min === undefined || min === '' || min === null) {
        min = 0
    }
    return Math.floor(Math.random() * (max-min) + min);
    randomNum()
    }


    // FUNCTION: gameOver()
    function gameOver () {

    }
    //// check to see if there is a winner on each turn
    //// if player/cpu has won run stopGame()

    // FUNCTION: stopGame() --> doesnt allow further game play
})


