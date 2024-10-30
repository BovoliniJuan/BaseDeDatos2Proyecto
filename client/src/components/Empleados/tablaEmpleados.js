import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import SemaforoDoble from '../semaforoDoble';

const TablaEmpleados = () => {
const [empleados, setEmpleados] = useState([]);
const navigate = useNavigate();

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch('http://localhost:9000/backend/Empleados/infoEmpleados.php')
        .then(response => response.json())
        .then(data => setEmpleados(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    const redireccionTickets = (empleado) => {
      navigate(`./tablaEmpleadoUnico?empleado=${(empleado)}`);
    };


    return (
        <Table>
        <TableCaption>Empleados</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Tickets contestados</TableHead>
            <TableHead>Estado</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {empleados.map((empleado) => (
            <TableRow>
                <TableCell onClick={() => redireccionTickets(empleado.id)}>{empleado.id}</TableCell>
                <TableCell>{empleado.nombre}</TableCell>
                <TableCell>{empleado.apellido}</TableCell>
                <TableCell>{empleado.dni}</TableCell>
                <TableCell>{empleado.cantidad_tickets_contestados}</TableCell>
                <TableCell><SemaforoDoble status={parseInt(empleado.cantidad_tickets_contestados)}/></TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};
  
export default TablaEmpleados;