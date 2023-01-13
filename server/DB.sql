CREATE DATABASE testdb;

CREATE TABLE basicInfo(
    ID serial primary key UNIQUE,
    Building varchar(50) NOT NULL,
    Floor varchar(2) NOT NULL,
    Name varchar(25) NOT NULL,
    Phone VARCHAR(10),
    Type varchar(15)
);

CREATE TABLE toiletForm(
    ID INT,
    Cleanliness INT,
    Complaint VARCHAR(255),
    Flushworking VARCHAR(5),
    WashedRegularly VARCHAR(5),
    WaterLeakage VARCHAR(5),
    WaterSupply VARCHAR(5),
    CONSTRAINT fk_ID FOREIGN KEY(ID) REFERENCES basicInfo(ID)
);

CREATE TABLE foodForm(
    ID INT,
    Ambience INT,
    Cleanliness INT,
    Feedback VARCHAR(255),
    FoodQuality INT,
    FoodTaste INT,
    ServiceQuality INT,
    CONSTRAINT fk_ID FOREIGN KEY(ID) REFERENCES basicInfo(ID) 
);

CREATE TABLE securityForm(
    ID INT,
    SecurityAlertness INT,
    SecurityAvailability INT,
    SecurityDrunk VARCHAR(3),
    SecurityMisbehaving VARCHAR(3),
    CONSTRAINT fk_ID FOREIGN KEY(ID) REFERENCES basicInfo(ID)
);