require('dotenv').config()
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

const AppService = {
  getEverything() {
    for (table of ['accounts', 'characters', 'portfolios', 'skills', 'stats']) {
      knexInstance(table).select('*')
        .then(result => {
          console.log(result)
        })
    }
  }
}

module.exports = AppService;

