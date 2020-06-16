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
      .then(rows => rows[0]);
  },

  getCharacters(db) {
    return db('characters').select('*')
      .then(result => {
        return result;
      });
  },

  createCharacter(db, new_character) {
    return db('characters')
      .insert({ ...new_character })
      .returning('*')
      .then(rows => rows[0]);
  },

  getPortfolios(db) {
    return db('portfolios').select('*')
      .then(result => {
        return result;
      });
  },

  createPortfolio(db, new_portfolio) {
    return db('portfolios')
      .insert({ ...new_portfolio })
      .returning('*')
      .then(rows => rows[0]);
  },

  getSkills(db) {
    return db('skills').select('*')
      .then(result => {
        return result;
      });
  }, 

  createSkills(db, new_skills) {
    return db('skills')
      .insert({ ...new_skills })
      .returning('*')
      .then(rows => rows[0]);
  },

  getStats(db) {
    return db('stats').select('*')
      .then(result => {
        return result;
      });
  }, 

  createStats(db, new_stats) {
    return db('stats')
      .insert({ ...new_stats })
      .returning('*')
      .then(rows => rows[0]);
  }
};

module.exports = AppService;

