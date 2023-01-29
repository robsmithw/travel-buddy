CREATE TABLE "Location" (
    "location_id"   INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address"	TEXT NOT NULL,
    "country"   TEXT NOT NULL,
    "city"  TEXT NOT NULL,
    "zip_code"   INTEGER NOT NULL,
    "state"  TEXT DEFAULT "N/A",
    "latitude"  FLOAT NOT NULL,
    "longitude"  FLOAT NOT NULL
);

CREATE TABLE "User" (
    "user_id"    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name"    TEXT NOT NULL,
    "last_name"    TEXT NOT NULL,
    "username"    TEXT NOT NULL,
    "password"    TEXT NOT NULL,
    "city"      TEXT NOT NULL
);

CREATE TABLE "Event" (
	"event_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT NOT NULL,
	"category"	TEXT NOT NULL,
	"date" TEXT NOT NULL,
    "location_id"   INTEGER NOT NULL,
    "event_address" TEXT NOT NULL,
    "start_time"    TEXT NOT NULL,
    "end_time"      TEXT NOT NULL,
    FOREIGN KEY("location_id") REFERENCES "Location"("location_id")
);

CREATE TABLE "Attendance" (
	"attendance_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	"event_id" INTEGER NOT NULL,
	"customer_id" INTEGER NOT NULL,
	FOREIGN KEY("event_id") REFERENCES "Events"("event_id")
);

DROP TABLE "User";

insert into Location (location_id, address, country, city, zip_code, state, latitude, longitude) values (1, 'Apt 1926', 'Kazakhstan', 'Almaty', '9', 'TN', 43.2220146, 76.8512485);
insert into Location (location_id, address, country, city, zip_code, state, latitude, longitude) values (2, '13th Floor', 'Philippines', 'Hilotongan', '66', NULL, 11.144989, 123.6441498);
insert into Location (location_id, address, country, city, zip_code, state, latitude, longitude) values (3, '15th Floor', 'Indonesia', 'Sungaikupang', '0401', 'TN', -3.0245897, 115.9881867);

insert into User (user_id, first_name, last_name, username, password, city) values (1, 'Daniele', 'Sissel', 'dsissel0', 'HkyWC7YL', 'Nashville');
insert into User (user_id, first_name, last_name, username, password, city) values (2, 'Emmalyn', 'Dossantos', 'edossantos1', 'iJimlknPjwF', 'Los Angeles');
insert into User (user_id, first_name, last_name, username, password, city) values (3, 'Rosella', 'Bruggen', 'rbruggen2', 'RQzmA3YIgN', 'Chicago');

insert into Event (event_id, location_id, name, category, event_address, date, start_time, end_time) values (1, 1, 'Crownhardt', 'HVAC', '8th Floor', '7/10/2022', '6:01 PM', '12:59 AM');
insert into Event (event_id, location_id, name, category, event_address, date, start_time, end_time) values (2, 2, 'Ridge Oak', 'Termite Control', 'Apt 56', '5/10/2022', '2:46 AM', '7:26 PM');
insert into Event (event_id, location_id, name, category, event_address, date, start_time, end_time) values (3, 3, 'Superior', 'Framing (Steel)', 'PO Box 80032', '8/10/2022', '10:13 AM', '8:41 AM');

insert into Attendance (attendance_id, customer_id, event_id) values (1, 1, 1);
insert into Attendance (attendance_id, customer_id, event_id) values (2, 2, 2);
insert into Attendance (attendance_id, customer_id, event_id) values (3, 3, 3);