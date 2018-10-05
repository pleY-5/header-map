DROP DATABASE restaurants;

CREATE DATABASE restaurants;

USE restaurants;

CREATE TABLE restaurant (id serial primary key, name char(25), dollars integer, address char(25), city char(25), state char(25), postalCode char(25), latitude char(25), longitude char(25), tel char(25), url char(25), claimed int, yelpingSince char(60));

CREATE TABLE category (id serial primary key, category char(25), restaurantId integer references restaurant(id));

CREATE TABLE rating (id serial primary key, year integer, month char(10), stars1 integer, stars2 integer, stars3 integer, stars4 integer, stars5 integer, restaurantId integer references restaurant(id));
-- \COPY restaurant(name, dollars, address, city, state, postalCode, latitude, longitude, tel, url, claimed, yelpingSince) FROM 'C:\Users\Spencer\Desktop\Hack-Reactor Projects\header-map\database\csvData\restaurantInfo\resInfo1.csv' DELIMITER ',' CSV HEADER;
