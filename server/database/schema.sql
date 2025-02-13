create table user (
  id int unsigned primary key auto_increment not null,
  pseudo varchar (20) not null,
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

insert into user(pseudo, email, password)
values
  ("valou", "valou.pouet@gmail.com", "123456");

insert into event(title, theme, poster, location, date_hour, description, price, user_id)
values
  ('Le chateau ambulant', 'Projection', 'https://cinemasdaujourdhui.com/wp-content/uploads/2022/06/45PVXJUYfH6yIINcQKelQ0SJPvh-scaled.jpg', 'Rue du Général Buat - Nantes', '2025-02-14 14:00:00', 'Projection du film le chateau Ambulant', 10, 1),
  ('Le chateau dans le ciel', 'Projection', 'https://imgsrc.cineserie.com/2020/08/1594286.jpg?ver=1', 'Rue du Général Buat - Nantes', '2025-02-14 14:00:00', 'Projection du film le chateau dans le ciel', 10, 1),
  ('Mon voisin Totoro', 'Projection', 'https://www.glenat.com/sites/default/files/images/livres/couv/9782344030257-001-T.jpeg', 'Rue du Général Buat - Nantes', '2025-02-16 14:00:00', 'Projection du film mon voisin Totoro', 10, 1);