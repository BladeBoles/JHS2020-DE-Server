const express = require('express');
const jobHuntService = require('./services');
const jobHuntRouter = express.Router();
const jsonParser = express.json();

jobHuntRouter
  .route('/profiles')
  .get((req, res, next) => {
    jobHuntService.getAccounts(req.app.get('db'))
      .then(profiles => res.status(201).json(profiles))
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const account_name =  req.body;
    jobHuntService.createAccount(req.app.get('db'), account_name)
      .then(profiles => res.status(204).json(profiles))
      .catch(next);
  });

jobHuntRouter
  .route('/characters')
  .get((req, res, next) => {
    // letuserLoggedIn = req.body.new_character.character_owner;
    jobHuntService.getCharacters(req.app.get('db'), userLoggedIn = 1)
      .then(characters => 
      {
        console.log(characters)
        return res.status(201).json(characters)
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const new_character =  req.body;
    jobHuntService.createCharacter(req.app.get('db'), new_character)
      .then(character => res.json(character).status(204))
      .catch(next);
  });

jobHuntRouter
  .route('/portfolios')
  .get((req, res, next) => {
    // letuserLoggedIn = req.body.new_portfolio.portfolio_owner;
    jobHuntService.getPortfolios(req.app.get('db'), userLoggedIn = 1)
      .then(portfolios => res.json(portfolios))
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    console.log("portfolio req.body: ", req.body)
    const new_portfolio =  req.body;
    jobHuntService.createPortfolio(req.app.get('db'), new_portfolio)
      .then(portfolio => res.status(204).json(portfolio))
      .catch(next);
  });

jobHuntRouter
  .route('/skills')
  .get((req, res, next) => {
    // letuserLoggedIn = req.body.new_skills.skills_owner;
    jobHuntService.getSkills(req.app.get('db'), userLoggedIn = 1)
      .then(skills => res.json(skills))
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const new_skills =  req.body;
    jobHuntService.createSkills(req.app.get('db'), new_skills)
      .then(skills => res.status(204).json(skills))
      .catch(next);
  });

jobHuntRouter
  .route('/stats')
  .get((req, res, next) => {
    // letuserLoggedIn = req.body.new_stats.stats_owner;
    jobHuntService.getStats(req.app.get('db'), userLoggedIn = 1)
      .then(stats => res.json(stats))
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const new_stats =  req.body;
    jobHuntService.createStats(req.app.get('db'), new_stats)
      .then(stats => res.status(204).json(stats))
      .catch(next);
  });

module.exports = jobHuntRouter;