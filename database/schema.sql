DROP TABLE IF EXISTS artists CASCADE;

CREATE TABLE artists (
    artists_id serial PRIMARY KEY,
    artist_name VARCHAR(100),
    festival_name VARCHAR(100),
    removed BOOLEAN DEFAULT false
);

CREATE INDEX festival_name ON artists(festival_name);
