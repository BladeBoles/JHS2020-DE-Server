require('dotenv').config();

const AppService = {
  getAccounts(db) {
    return db('accounts').select('*')
      .then(result => {
        return result;
      });
  },

  createAccount(db, account_name) {
    return db('accounts')
      .insert({ account_name })
      .returning('*')
      .then(rows => rows[0])

  },

  getCharacters(db) {
    return db('characters').select('*')
      .then(result => {
        return result;
      });
  },

  getPortfolios(db) {
    return db('portfolios').select('*')
      .then(result => {
        return result;
      });
  },

  getSkills(db) {
    return db('skills').select('*')
      .then(result => {
        return result;
      });
  },

  getStats(db) {
    return db('stats').select('*')
      .then(result => {
        return result;
      });
  }, 

  
};

module.exports = AppService;

