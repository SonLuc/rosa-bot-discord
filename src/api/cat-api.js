require('dotenv').config()

const API = process.env.CAT_API_KEY

async function getCat () {
  const responde = await fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': API
    }
  })
  const data = await responde.json()
  return data
}

module.exports = {
  getCat
}