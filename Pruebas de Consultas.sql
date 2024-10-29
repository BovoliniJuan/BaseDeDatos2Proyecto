-- Cantidad de tickets totales, abiertos y resueltos por empleado
SELECT 
    e.dni,
    CONCAT(e.nombre, ' ', e.apellido) AS nombre,
    COUNT(tr.id_ticket) AS cantidad_tickets,
    SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) AS abiertos,
    SUM(CASE WHEN tr.resuelto = 'Y' THEN 1 ELSE 0 END) AS resueltos
FROM 
    empleados e
LEFT JOIN 
    tickets_respuestas tr ON e.id = tr.id_empleado
LEFT JOIN 
    tickets t ON tr.id_ticket = t.id
GROUP BY 
    e.dni, e.nombre, e.apellido;


-- Detalles de los tickets por empleado específico
SELECT 
    t.id AS nro_ticket,
    emp.nombre AS empresa,
    a.nombre_area AS area,
    t.fecha_envio AS fecha,
    t.abierto
FROM 
    tickets t
JOIN 
    empresas emp ON t.id_empresa = emp.id
JOIN 
    areas a ON t.id_area = a.id
JOIN 
    tickets_respuestas tr ON t.id = tr.id_ticket
JOIN 
    empleados e ON tr.id_empleado = e.id
WHERE 
    e.dni = '12345678'; -- Reemplaza con el DNI del empleado específico


-- Muestra todos los tiquets tanto abiertos como cerrados
SELECT t.id AS nro_ticket, e.nombre AS empresa, a.nombre_area AS area, t.fecha_envio AS fecha, t.abierto
FROM tickets t
JOIN empresas e ON t.id_empresa = e.id
JOIN areas a ON t.id_area = a.id
WHERE t.id_empleado = :id_empleado;


-- Para ver todos los tickets 
SELECT 
    t.id AS nro_ticket,
    a.nombre_area AS area,
    e.nombre AS empresa,
    t.fecha_envio AS fecha,
    CASE WHEN t.abierto = 1 THEN '●' ELSE '○' END AS abierto -- Estan los puntitos esos para que se vea como en la foto pero dsp hay q cambiarlo pero ni idea como ahora
    tickets t
JOIN 
    areas a ON t.id_area = a.id
JOIN 
    empresas e ON t.id_empresa = e.id
ORDER BY 
    t.id;


-- Para ver Empresas y sus tickets
SELECT 
    emp.nombre AS Empresa,
    loc.nombre AS Localidad,
    COUNT(t.id) AS CantidadTickets,
    SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) AS Abiertos,
    SUM(CASE WHEN tr.resuelto = 'Y' THEN 1 ELSE 0 END) AS Resueltos,
    CASE 
        WHEN SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) = 0 THEN '🟢' -- Verde si no hay tickets abiertos
        WHEN SUM(CASE WHEN t.abierto = 1 THEN 1 ELSE 0 END) <= 5 THEN '🟡' -- Amarillo si hay entre 1 y 5 tickets abiertos
        ELSE '🔴' -- Rojo si hay más de 5 tickets abiertos
    END AS Estado
FROM 
    empresas emp
JOIN 
    localidades loc ON emp.id_localidad = loc.id
LEFT JOIN 
    tickets t ON emp.id = t.id_empresa
LEFT JOIN 
    tickets_respuestas tr ON t.id = tr.id_ticket
GROUP BY 
    emp.nombre, loc.nombre;


-- Para ver los tickets de una empresa 
SELECT 
    t.id AS nro_ticket,
    a.nombre_area AS Area,
    t.fecha_envio AS Fecha,
    CASE 
        WHEN t.abierto = 1 THEN '🟢'  -- Verde para tickets abiertos
        ELSE '🔴'  -- Rojo para tickets cerrados
    END AS Abierto
FROM 
    tickets t
JOIN 
    areas a ON t.id_area = a.id
JOIN 
    empresas e ON t.id_empresa = e.id
WHERE 
    e.nombre = 'NombreDeLaEmpresa'; -- Reemplaza 'NombreDeLaEmpresa' con el nombre de la empresa específica
