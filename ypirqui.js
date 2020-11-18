console.log("👧🏻: ¡Estoy despierta!");

const config = require('./config.js');
const Discord = require('discord.js');

const client = new Discord.Client();
client.login(config.bot_token);

client.on('ready', readyDiscord);
client.on('message', gotMessage);

function readyDiscord() {
    console.log('👧🏻: ¡Estoy conectada!');
}

function gotMessage(msg) {

    var found = false;

    if (config.valid_channels.indexOf(msg.channel.id) < 0) {
        return;
    }

    bot_response = '';

    if (msg.mentions.users.has(config.bot_id)) {
        console.log(msg.mentions.users);

        number_of_syllables = Math.floor(Math.random() * 3) * 3 + 2;
        for (f = 0; f < number_of_syllables; f++) {
            bot_response += 'ñi';
        }

        if (msg.mentions.users.size === 1) {
            msg.reply(bot_response);
        } else {
            /*console.log("------------");
            for (var u in msg.mentions.users) {
                console.log(u);
                console.log("o");
            }*/
            msg.mentions.users
                .filter(user => !user.bot)
                .each(user => {bot_response = user.toString() + ' ' + bot_response});
            msg.channel.send(bot_response);
        }
        console.log('👧🏻: Me han hablado');
    }
}