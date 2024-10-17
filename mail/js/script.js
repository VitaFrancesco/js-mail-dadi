const mailList = ['vitafrancesco00@gmail.com', 'romelosurdo@gmail.com', 'stresaantonio@yahoo.it', 'rossimario@gmail.com', 'verdifilippo@gmail.com']
console.log(mailList)

const usermail = prompt('Inserisci la tua mail')
// mailList.includes(usermail) ? alert(`Bentornato ${usermail}`) : alert(`Non sei registrato!`) //${usermail} desideri registrarti? (implementare poi)

let  message = 'Non sei registrato!'
for (let i = 0; i < mailList.length; i++) {
    if (mailList.at(i) === usermail) {
        message = `Bentornato ${usermail}`
    }
}
alert(message)