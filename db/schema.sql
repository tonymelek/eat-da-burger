use abezvzpiwdvhp48j;
create table burger_list(
id int auto_increment,
burger_name varchar(50) not null,
is_selected boolean default false,
primary key(id));

insert into burger_list (burger_name) values ("Cheese Burger"),("Big Mac"), ("Big Tasty"),("Quarter Pounder");
select * from burger_list;