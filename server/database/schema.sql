create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table event (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  theme varchar(100) not null,
  poster varchar(500),
  location varchar(150) not null,
  date_hour datetime not null,
  description varchar(255) not null,
  price int not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

insert into user(email, password)
values
  ("valou.pouet@gmail.com", "123456");

insert into event(title, theme, poster, location, date_hour, description, price, user_id)
values
  ("Le chateau ambulant", "Projection", "", "30 rue du Général Buat - Nantes", "2025-02-14 14:00:00", "Projection du film le chateau Ambulant", 20, 1)
