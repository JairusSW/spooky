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

let i = 0

setInterval(() => {
    
    if (msgs[i]) console.log(msgs[i])

    i++

}, 1000);