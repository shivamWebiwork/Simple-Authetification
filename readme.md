Host - ec2-34-224-226-38.compute-1.amazonaws.com
Database - d9rsp8bnig243r
User - yxbkmieizydsiy
Port - 5432
Password - 69b98ca85316b0667c5f0f1c33d0a5102fa77c7cb8f2f0648801dc0d0731b922
URI - postgres://yxbkmieizydsiy:69b98ca85316b0667c5f0f1c33d0a5102fa77c7cb8f2f0648801dc0d0731b922@ec2-34-224-226-38.compute-1.amazonaws.com:5432/d9rsp8bnig243r
Heroku CLI - heroku pg:psql postgresql-colorful-32525 --app espauthentification

//users table query :-

CREATE TABLE users (userid serial PRIMARY KEY,firstname VARCHAR ( 50 ) NOT NULL,lastname VARCHAR ( 50 ) NOT NULL,email VARCHAR ( 255 ) UNIQUE NOT NULL, password VARCHAR (255) NOT NULL,otp INTEGER DEFAULT 0,isactive INTEGER DEFAULT 1,createdat TIMESTAMP WITH TIME  ZONE , updatedat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP );