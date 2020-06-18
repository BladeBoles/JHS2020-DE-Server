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

  getCharacters(db, userLoggedIn) {
    return db('characters').select('*').where({ character_owner: userLoggedIn })
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

  getPortfolios(db, userLoggedIn) {
    return db('portfolios').select('*').where({ portfolio_owner: userLoggedIn })
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

  getSkills(db, userLoggedIn) {
    return db('skills').select('*').where({ skills_owner: userLoggedIn })
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

  getStats(db, userLoggedIn) {
    return db('stats').select('*').where({ stats_owner: userLoggedIn })
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

