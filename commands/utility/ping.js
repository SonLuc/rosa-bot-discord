const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute (interaction) {
    await interaction.reply('Pong!')
  }
}