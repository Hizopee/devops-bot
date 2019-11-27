const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const cron = require('node-cron')

client.on('ready', (message) => {
  console.log(`Logged in as ${client.user.tag}!`)

  var generalChannel = client.channels.get(config.generalID)
  
  // Sens Trello link at 9AM
  cron.schedule("0 9 * * wed" , () => {
    	generalChannel.send(config.trello)
	})

  // Send Form at 4 PM
  cron.schedule("0 16 * * wed" , () => {
    	generalChannel.send(config.formulaire)
	})
})

client.login(config.token)