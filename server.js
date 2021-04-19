const { fastify } = require('fastify')

var nodeoutlook = require('./node_modules/nodejs-nodemailer-outlook/nodejs-nodemailer-outlook')

require('dotenv').config()

const fs = require('fs')

const app = fastify()

app.listen(3000)

app.get('/', (req, res) => {

    res.type('text/html')

    res.send(fs.readFileSync('./index.html'))

})

app.get('/music.mp3', (req, res) => {

    res.type('audio/mp3')

    res.send(fs.readFileSync('./audio/music.mp3'))

})

app.get('/iseeyou.mp3', (req, res) => {

    res.type('audio/mp3')

    res.send(fs.readFileSync('./audio/iseeyou.mp3'))

})

app.get('/mail', (req, res) => {

    res.type('text/plain')

    nodeoutlook.sendEmail({
        auth: {
            user: "jairus.v.tanaka@outlook.com",
            pass: process.env.pass
        },
        from: 'jairus.v.tanaka@outlook.com',
        to: req.query['email'],
        subject: '🦴💀We See You💀🦴',
        html: '<img src=https://i.ibb.co/mD8qmGh/WIN-20210419-11-46-45-Pro.jpg">',
        text: 'You Have Been Haked',
        replyTo: 'jairus.v.tanaka@outlook.com',
        attachments: [
            {   // stream as an attachment
                filename: 'ThisWasAJokeNoWorriesNoFreakingOutPls.mp3',
                content: fs.createReadStream('./audio/iseeyou.mp3')
            }
            
        ],
        onSuccess: (i) => {
            console.log(i)
            console.log("Sent Spooky Email")
            res.send("Sent Spooky Email")
        },
        onError: (er) => {
            console.log(er)
            console.log("No Sent Spooky Email")
            res.send("No Sent Spooky Email")
        }
    })

})