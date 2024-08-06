create database db;
use db;

create table clientes (
id int primary key,
nombre varchar(50) not null,
direccion varchar (100) not null,
telefono varchar (14) not null,
ciudad varchar (50) not null 
);
SHOW TABLES;
DESCRIBE clientes;


