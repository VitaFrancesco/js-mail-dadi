const mailList = ['vitafrancesco00@gmail.com', 'romelosurdo@gmail.com', 'stresaantonio@yahoo.it', 'rossimario@gmail.com', 'verdifilippo@gmail.com']
const password = ['hiwhdiwg', 'iud3h32', 'bsyt2w6bs', 'ydwwuq7', 'hbbwqtw6']
console.log(mailList)
console.log(password)

const userMail = prompt('Inserisci la tua mail')
// mailList.includes(usermail) ? alert(`Bentornato ${usermail}`) : alert(`Non sei registrato!`) //${usermail} desideri registrarti? (implementare poi)

let  message = 'Non sei registrato!'
let userPass

for (let i = 0; i < mailList.length; i++) {
    if (mailList.at(i) === userMail) {
        // message = `Bentornato ${userMail}`
        // break 
        do {
            userPass = prompt('Inserisci la password')
            if (password.at(i) === userPass) {
                message = `Bentornato ${userMail}`
                break
            } else {
                alert('Password errata')
                let tryAgain = confirm('Desideri riprovare?') // poi esce
                if (tryAgain === false) {
                    message = 'Non hai effettuato l\'accesso'
                    break
                }
            }
        } while (password.at(i) === userPass) // non mi verifia la condizione
    }
}
alert(message)

// implemento desideri registrarti
if (message === 'Non sei registrato!') {
    let addMail = confirm(`${userMail} desideri registrarti?`)
    if (addMail === true) {
        let confirmPass
        do {
            userPass = prompt('Inserisci una password...')
            confirmPass = prompt('Conferma password...')
            if (userPass !== confirmPass) {
                alert('Le password inserite non coincidono') // esce dal ciclo 
                continue
            } else {
                mailList.push(userMail)
                password.push(userPass)
                alert('Hai effettuato la registrazione con successo!')
                break
            }
        } while (userPass === confirmPass) // non mi verifia la condizione
        
    }
}
console.log(mailList)
console.log(password)
