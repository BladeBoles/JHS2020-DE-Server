BEGIN;

INSERT INTO accounts
  (account_name)
VALUES
  ('guest'),
  ('fred'),
  ('billy');  

COMMIT;

BEGIN;

INSERT INTO characters
  (character_owner, character_name, character_avatar, pet_name, pet_type, pet_avatar)
VALUES
  (1, 'Cicolas Nage', 'https://www.placecage.com/400/400', 'Mo', 'Dog', 'https://www.placecage.com/300/300'),
  (2, 'Sir Testington III', 'https://www.placecage.com/200/200', 'Spike', 'Dog', 'https://www.placecage.com/325/350'),
  (3, 'Diana Debugger', 'https://www.placecage.com/400/400', 'Squirtle', 'Fish', 'https://www.placecage.com/250/300');

COMMIT;

BEGIN;

INSERT INTO portfolios
  (
    portfolio_owner, career_path, background, personality,
    education, bootcamp, project_1_name, project_1_description,
    project_1_image, project_2_name, project_2_description,
    project_2_image
  )

VALUES
  (
    1, 'Front End', 'Fast Food', 'Basic',
    'Basketweaving', 'Scam', 'Meme Generator 9001', 'Breaking scouters',
    'https://www.placecage.com/200/200', 'TODO-a11y', 'not another todo app.',
    'https://www.placecage.com/250/250'
  ),
  (
    2, 'Back End', 'Starving Artist', 'Nerdy',
    'Art', 'Good', 'Meme Generator 9002', 'Breaking scooters',
    'https://www.placecage.com/225/225', 'TODO-a12y', 'yep yep yep.',
    'https://www.placecage.com/350/350'
  );
COMMIT;

BEGIN;

INSERT INTO skills
  (
    skills_owner, front_end, back_end, computer_science,
    soft_skills, luck
  )
VALUES
  (1, 6, 3, 4, 6, 2),
  (2, 2, 7, 9, 3, 6);

COMMIT;
BEGIN;
INSERT INTO stats
  (
    stats_owner, funds, happiness, connections, energy,
    health, current_week
  )
VALUES
  (1, 10000, 50, 5, 68, 35, 30),
  (2, -5000, 60, 2, 70, 75, 27);

COMMIT;
