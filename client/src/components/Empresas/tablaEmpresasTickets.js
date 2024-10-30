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

const TablaEmpresasTickets = () => {
const [tickets, setTickets] = useState([]);

const url = new URL(window.location.href);
const empresa = url.searchParams.get('empresa');
const area = url.searchParams.get('area');

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch(`http://localhost:9000/backend/Empresas/infoEmpresas.php?empresa=${empresa}&area=${area}`)
        .then(response => response.json())
        .then(data => setTickets(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    return (
        <Table>
        <TableCaption>Tickets + Area + Empresa</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Nro. Ticket</TableHead>
            <TableHead>Abierto</TableHead>
            <TableHead>Resuelto</TableHead>
            <TableHead>Fecha</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tickets.map((ticket) => (
            <TableRow key={ticket.nro_ticket}>
                <TableCell >{ticket.nro_ticket}</TableCell>
                <TableCell><SemaforoDoble status={parseInt(ticket.abierto)} /></TableCell>
                <TableCell><SemaforoDoble status={parseInt(ticket.resuelto)} /></TableCell>
                <TableCell>{ticket.fecha}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};
  
export default TablaEmpresasTickets;