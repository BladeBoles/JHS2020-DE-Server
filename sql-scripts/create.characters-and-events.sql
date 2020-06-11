CREATE TABLE IF NOT EXISTS characters (
  character_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  character_name TEXT NOT NULL,
  character_avatar TEXT NOT NULL,
  pet_name TEXT NOT NULL,
  pet_avatar TEXT NOT NULL
); 

CREATE TABLE IF NOT EXISTS portfolios (
  portfolio_id varchar(80) REFERENCES characters(character_id),
  career_path TEXT NOT NULL,
  background TEXT NOT NULL,
  personality TEXT NOT NULL,
  education TEXT NOT NULL,
  bootcamp TEXT NOT NULL,
  project_1_name TEXT,
  project_1_description TEXT,
  project_1_image TEXT,
  project_2_name TEXT,
  project_2_description TEXT,
  project_2_image TEXT,
  project_3_name TEXT,
  project_3_description TEXT,
  project_3_image TEXT
);

CREATE TABLE IF NOT EXISTS skills (
  skills_id varchar(80) REFERENCES characters(character_id),
  front_end INTEGER NOT NULL,
  back_end INTEGER NOT NULL,
  computer_science INTEGER NOT NULL,
  soft_skills INTEGER NOT NULL,
  luck INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS stats (
  stats_id varchar(80) REFERENCES characters(character_id),
  funds INTEGER NOT NULL,
  happiness INTEGER NOT NULL,
  connections INTEGER NOT NULL,
  energy INTEGER NOT NULL,
  health INTEGER NOT NULL,
  current_week INTEGER NOT NULL,

)