const { getCat } = require('../../src/api/cat-api')
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Get a random cat image'),
  async execute (interaction) {
    const cat = await getCat()
    interaction.reply(cat[0].url)
  }
}
