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
    
    let playMusic1 = document.querySelector('.playmusic')
    let pauseMusic1 = document.querySelector('.pausemusic')
    let resetBtn = document.querySelector('.reset')


    // display initial message
    displayMessage.innerText = "(Player1) Jimmy, you must use Charizard to defeat Snorlax & Brian, the Bully."

    // sound effects for attacks & victory
    let ember = new Audio ('https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/ohkyaxzeqo/Ember.mp3')
    let fire = new Audio ('https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/yksrrkonhz/Fire%20Spin.mp3')
    let blast = new Audio ('https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/jeqkuorvbi/Blast%20Burn.mp3')    
    let slam = new Audio ('https://vgmsite.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/tvfuhrhluz/Skull%20Bash%20part%201.mp3')
    let victory = new Audio ('https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/rkkmtqon/116-victory%20%28vs%20trainer%29.mp3')
    
    let music = new Audio ('https://vgmsite.com/soundtracks/pokemon-gameboy-sound-collection/gbhogmtx/107-battle%20%28vs%20wild%20pokemon%29.mp3')
    


    // adding music play
    playMusic1.addEventListener("click", playMusic)
    function playMusic(){
            music.play() 
    }

    // pause music play
    pauseMusic1.addEventListener("click", pauseMusic)
    function pauseMusic(){
            music.pause() 
    }


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
    player1Health.innerText = `Player 1 ${player1.name} Health (${player1.hp.current} / ${player1.hp.total})`
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
                    if (gameCheck.classList.contains('attack1')) {
                        cpu.hp.current -= player1.attacks[0].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[0].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                        ember.play()
                    } else if (gameCheck.classList.contains('attack2')) {
                        cpu.hp.current -= player1.attacks[1].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[1].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                        fire.play()
                    } else if (gameCheck.classList.contains('attack3')) {
                        cpu.hp.current -= player1.attacks[2].damage
                        attackUsed.innerText = `Charizard used ${player1.attacks[2].attackName}`
                        cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`
                        blast.play()
                    }
                    turnNum++
                } else {
                    gameOver()  
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
                            slam.play()
                            turnNum++
                        } else {
                            gameOver()   
                            turnNum++
                    }
                }
            }, "2500")

            // FUNCTION: gameOver()
            function gameOver() {
                if (cpu.hp.current <= 0) {
                    displayMessage.innerText = `(Player1) Jimmy, you have won, you can now go find Julie Ann at the Arctic Mountains`
                    victory.play()
                }
                if (player1.hp.current <= 0) {
                    displayMessage.innerText = `(CPU) Brian the Bully has won. You cannot pass! Try again`
                }
            }
    }
    
            // adding reset
            // FUNCTION: resetGameboard() --> add event listener to #reset button on click
            resetBtn.addEventListener("click", function resetGame(){
                
                // reset full HP
                cpu.hp.current = 500
                player1.hp.current = 500
  
                // update texts
                displayMessage.innerText = "(Player1) Jimmy, you must use Charizard to defeat Snorlax & Brian, the Bully."
                attackUsed.innerText = ""

                // re-set all starting variables to initial values
                // SCOREBOARD
                turnNum = 0

                // update initial health bars
                player1Health.innerText = `Player 1 ${player1.name} Health (${player1.hp.current} / ${player1.hp.total})`
                cpuHealth.innerText = `CPU ${cpu.name} Health (${cpu.hp.current} / ${cpu.hp.total})`

            })
})
