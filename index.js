const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json')
const prefix = ("/")

bot.on('ready', function () {
    console.log("Je suis pret à être utilisé.")
    bot.user.setActivity('compter les moutons').catch(console.error)

})

bot.on('guildMemberAdd', member => {
    member.createdm().then(channel => {
        return channel.send('Bienvenue mon coco.' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
})

bot.on('message', msg => {
    if (msg.content === "bonjour")
        msg.reply("Bonjour, évite de me déranger stp, je suis avec Alex...")
    })

bot.login(cfg.token);