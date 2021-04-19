"use strict";

var nodeoutlook = require('./node_modules/nodejs-nodemailer-outlook/nodejs-nodemailer-outlook')

const fs = require('fs')

let msgs = ["Loading malware...", "Spamming Inbox", "Deleting Files", "Storing Passwords", "Locking Computer", "Playing Scary Music", "Setting the fuse", "Set the bomb for 5:00", "Disconnecting", "Deleted files"]

const ffmpeg = require('./node_modules/fluent-ffmpeg/index')

const Speaker = require('./node_modules/speaker/index')

// Scary music
const musicSpeaker = new Speaker({
    channels: 2,          // 2 channels
    bitDepth: 16,         // 16-bit samples
    sampleRate: 44100     // 44,100 Hz sample rate
});

ffmpeg(fs.createReadStream('./audio/music.mp3')).toFormat('s16le').pipe(musicSpeaker)

setTimeout(() => {
    
    const seeSpeaker = new Speaker({
        channels: 2,          // 2 channels
        bitDepth: 16,         // 16-bit samples
        sampleRate: 44100     // 44,100 Hz sample rate
    });
    
    ffmpeg(fs.createReadStream('./audio/iseeyou.mp3')).toFormat('s16le').pipe(seeSpeaker)

}, 5000);

nodeoutlook.sendEmail({
    auth: {
        user: "jairus.v.tanaka@outlook.com",
        pass: "santaclaws12"
    },
    from: 'jairus.v.tanaka@outlook.com',
    to: 'jairus.v.tanaka@outlook.com',//buddycorth@gmail.com
    subject: '🦴💀We See You💀🦴',
    html: '<img src=https://i.ibb.co/mD8qmGh/WIN-20210419-11-46-45-Pro.jpg">',
    text: 'You Have Been Haked',
    replyTo: 'jairus.v.tanaka@outlook.com',
    attachments: [
        {   // stream as an attachment
            filename: 'ThisWasAJokeNoWorriesNoFreakingOutPls.mp3',
            content: fs.createReadStream('iseeyou.mp3')
        }
        
    ],
    onSuccess: (i) => console.log("Sent Spooky Email")
})

let i = 0

setInterval(() => {
    
    if (msgs[i]) console.log(msgs[i])

    i++

}, 1000);