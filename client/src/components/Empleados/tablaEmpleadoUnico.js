import React, { useEffect, useState } from 'react';

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

const TablaEmpleadoUnico = () => {
const [tickets, setTickets] = useState([]);

const url = new URL(window.location.href);
const empleado = url.searchParams.get('empleado');

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch(`http://localhost:9000/backend/Empleados/infoEmpleados.php?empleado=${empleado}`)
        .then(response => response.json())
        .then(data => setTickets(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    return (
        <Table>
        <TableCaption>Empleados + Tickets</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Nro. Ticket</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Abierto</TableHead>
            <TableHead>Fecha</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tickets.map((ticket) => (
            <TableRow key={ticket.ticket_id}>
                <TableCell >{ticket.ticket_id}</TableCell>
                <TableCell>{ticket.area}</TableCell>
                <TableCell>{ticket.empresa}</TableCell>
                <TableCell><SemaforoDoble status={parseInt(ticket.abierto)} /></TableCell>
                <TableCell>{ticket.fecha}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};
  
export default TablaEmpleadoUnico;