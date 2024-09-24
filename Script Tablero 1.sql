create database tablero_bda
use tablero_bda

create table provincias(
id int primary key identity(1,1),
nombre varchar(50))

create table paises(
id int primary key identity(1,1),
nombre varchar(50)
)

create table localidades(
id int primary key identity(1,1),
nombre varchar(50),
codigo_postal varchar(5),
id_provincia int,
id_pais int,
foreign key (id_provincia) references provincias(id),
foreign key (id_pais) references paises(id)
)

create table areas(
id int primary key identity(1,1),
nombre_area varchar(20),
descripcion varchar(50)
)

create table empresas(
id int primary key identity(1,1),
nombre varchar(50),
id_localidad int,
foreign key (id_localidad) references localidades(id)
)

create table empleados(
id int primary key identity(1,1),
nombre varchar(20),
apellido varchar(20),
dni int unique
)

create table tickets(
id int primary key identity(1,1),
consulta varchar(250),
id_area int,
abierto bit,
fecha_envio datetime,
id_empresa int,
foreign key (id_empresa) references empresas(id),
foreign key (id_area) references areas(id)
)

create table tickets_respuestas(
id_empleado int,
id_ticket int,
primary key(id_empleado, id_ticket),
foreign key (id_empleado) references empleados(id),
foreign key (id_ticket) references tickets(id),
resuelto char,
comentarios varchar(100),
fecha_abierto datetime,
fecha_cerrado datetime
)

create table areas_empresas(
id_area int,
id_empresa int,
primary key(id_area,id_empresa),
foreign key(id_area) references areas(id),
foreign key(id_empresa) references empresas(id)
)

create table empresas_localidades(
    id_empresa int,
    id_localidad int,
    direccion varchar(50),
    foreign key (id_empleado) references empresas(id),
    foreign key (id_localidad) references localidades(id),
    primary key (id_empleado,id_localidad)
)