CREATE TABLE category (id serial primary key, category char(25), restaurantId integer references restaurant(id));

\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo1.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo2.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo3.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo4.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo5.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo6.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo7.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo8.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo9.csv' DELIMITER ',' CSV HEADER;
\COPY category(category, restaurantId) FROM 'C:/Users/Spencer/Desktop/Hack-Reactor Projects/header-map/database/csvData/categoryInfo/catInfo10.csv' DELIMITER ',' CSV HEADER;


