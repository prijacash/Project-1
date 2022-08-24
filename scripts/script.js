console.log('test')

// VARIABLES
window.addEventListener("DOMContentLoaded", () => {

    // Capture DOM Elements from page to store as variables
    let cpuHealth = document.querySelector('#cpuHealth')
    let player1Health = document.querySelector('#playerHealth')
    let attack1 = document.querySelector('.attack1')
    let attack2 = document.querySelector('.attack2')
    let attack3 = document.querySelector('.attack3')
    let displayMessage = document.querySelector('.displayMessage')
    let attackUsed = document.querySelector('#attackUsed')
    

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
                    damage: 60,
                },
                {
                    attackName: "Fire Spin",
                    damage: 45,
                },
                {
                    attackName: "Blast Burn",
                    damage: 30,
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
                    damage: 60,
                },
                {
                    attackName: "Heavy Slam",
                    damage: 35,
                },
                {
                    attackName: "Skull Bash",
                    damage: 13,
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
    attack1.addEventListener("click", attackClicked)
    attack2.addEventListener("click", attackClicked)
    attack3.addEventListener("click", attackClicked)

    function attackClicked(event) {
        let gameCheck = event.target
            // 1. check turn. decide who's turn it is.. player1 even, cpu odd
            if (turnNum % 2 === 0) {
                gameCheck.classList.add('player1')
                displayMessage.innerText = "Player 1's turn"
                if (player1.hp.current > 0) { // which buttons being clicked, based the same button action
                    if (attack1) {
                        cpu.hp.current -= player1.attacks[0].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[0].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                    } else if (attack2) {
                        cpu.hp.current -= player1.attacks[1].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[1].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                    } else if (attack3) {
                        cpu.hp.current -= player1.attacks[2].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[2].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                    }
                    turnNum++
                } else {
                    gameOver('Player 1')  
                }                        
            } 

        // while loop to play after 2.5 secs initial after click
        setTimeout(() => {
            while (turnNum % 2 !== 0) {
                gameCheck.classList.add('cpu')
                displayMessage.innerText = "CPU's turn"
                let random = Math.floor(Math.random() * 3) // 0-2
                    if (cpu.hp.current > 0) {
                        player1.hp.current -= cpu.attacks[random].damage
                        attackUsed.innerText = `Snorlax used ${cpu.attacks[random].attackName}`
                        player1Health.innerText = `Player ${player1.name} Health (${player1.hp.current} / ${player1.hp.total})`
                        turnNum++
                    } else {
                        gameOver('CPU')       
                }
            }
          }, "2500")

    }
    
    // FUNCTION: set timeout
    // setTimeout(() => {
    //     console.log("Delayed for 1 second.");
    //   }, "1000")

    // FUNCTION: gameOver()
    function gameOver(user) {
        displayMessage.innerText = `${user} has won.` 
        attackUsed.innerText = `Play Again`// prompt to dialog
    }

})


