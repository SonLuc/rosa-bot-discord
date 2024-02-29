const { SlashCommandBuilder } = require('discord.js')
const dayjs = require('dayjs')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('time')
    .setDescription('Replies with your current time'),
  async execute (interaction) {
    const time = dayjs().format('hh:mm A')
    try {
      await interaction.reply('Your actual time is: ' + time)
    } catch (error) {
      console.error(error)
      await interaction.reply('There was an error while executing this command!')
    }
  }
}