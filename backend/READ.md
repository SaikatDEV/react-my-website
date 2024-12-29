### Run these commands to config the env

npm install
node server.js

### Create Database:

CREATE DATABASE IF NOT EXISTS saikmmgk_trip;
USE saikmmgk_trip;

### This is the Query for creating table:

CREATE TABLE trip_itinerary (
trip_id VARCHAR(10),
location_name VARCHAR(50),
location_time TIME
);

### Insert data into table

INSERT INTO trip_itinerary (trip_id, location_name, location_time) VALUES
('tripA', 'Location1', '09:00:00'),
('tripA', 'Location2', '11:00:00'),
('tripB', 'Location3', '10:00:00'),
('tripB', 'Location4', '13:00:00'),
('tripC', 'Location5', '08:30:00'),
('tripC', 'Location6', '12:00:00');
