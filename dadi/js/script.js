// parseInt(Math.random() * 7)
let userDice = parseInt((Math.random() * 6) + 1)
console.log(userDice)
const computerDice = parseInt((Math.random() * 6) + 1)
console.log(computerDice)
// userDice > computerDice ? alert(`Hai vinto!`) : (userDice < computerDice ? alert(`Hai perso :/`) : alert(`é un pareggio...`))

// metodo con if 
if (userDice > computerDice) {
    alert(`Hai vinto!`)
} else if(userDice < computerDice) {
    alert(`Hai perso :/`)
} else {
    alert(`é un pareggio...`)
}