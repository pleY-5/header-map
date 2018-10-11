CREATE TABLE category (id serial primary key, category char(25), restaurantId integer references restaurant(id));

