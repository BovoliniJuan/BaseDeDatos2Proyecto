CREATE TABLE provincias(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);
CREATE TABLE paises(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);
CREATE TABLE localidades(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    codigo_postal VARCHAR(5),
    id_provincia INT,
    id_pais INT,
    FOREIGN KEY(id_provincia) REFERENCES provincias(id),
    FOREIGN KEY(id_pais) REFERENCES paises(id)
);
CREATE TABLE areas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_area VARCHAR(20),
    descripcion VARCHAR(50)
);
CREATE TABLE empresas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    id_localidad INT,
    FOREIGN KEY(id_localidad) REFERENCES localidades(id)
);
CREATE TABLE empleados(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20),
    apellido VARCHAR(20),
    dni INT UNIQUE
);
CREATE TABLE tickets(
    id INT PRIMARY KEY AUTO_INCREMENT,
    consulta VARCHAR(250),
    id_area INT,
    abierto BIT,
    fecha_envio DATETIME,
    id_empresa INT,
    FOREIGN KEY(id_empresa) REFERENCES empresas(id),
    FOREIGN KEY(id_area) REFERENCES areas(id)
);
CREATE TABLE tickets_respuestas(
    id_empleado INT,
    id_ticket INT,
    PRIMARY KEY(id_empleado, id_ticket),
    FOREIGN KEY(id_empleado) REFERENCES empleados(id),
    FOREIGN KEY(id_ticket) REFERENCES tickets(id),
    resuelto CHAR,
    comentarios VARCHAR(100),
    fecha_abierto DATETIME,
    fecha_cerrado DATETIME
);
CREATE TABLE areas_empresas(
    id_area INT,
    id_empresa INT,
    PRIMARY KEY(id_area, id_empresa),
    FOREIGN KEY(id_area) REFERENCES areas(id),
    FOREIGN KEY(id_empresa) REFERENCES empresas(id)
);
CREATE TABLE empresas_localidades(
    id_empresa INT,
    id_localidad INT,
    direccion VARCHAR(50),
    FOREIGN KEY(id_empresa) REFERENCES empresas(id),
    FOREIGN KEY(id_localidad) REFERENCES localidades(id),
    PRIMARY KEY(id_empresa, id_localidad)
);