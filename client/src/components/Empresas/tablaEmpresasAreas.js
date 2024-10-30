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
import SemaforoTriple from '../semaforoTriple';

const TablaEmpresasAreas = () => {
const [tickets, setTickets] = useState([]);
const navigate = useNavigate();

const url = new URL(window.location.href);
const empresa = url.searchParams.get('empresa');

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch(`http://localhost:9000/backend/Empresas/infoEmpresas.php?empresa=${empresa}`)
        .then(response => response.json())
        .then(data => setTickets(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const redireccionTickets = (area) => {
        navigate(`./tablaEmpresasTickets?empresa=${empresa}&area=${(area)}`);
      };

    return (
        <Table>
        <TableCaption>Tickets + Empresa</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Area</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Abiertos</TableHead>
            <TableHead>Resueltos</TableHead>
            <TableHead>Estado</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tickets.map((ticket) => (
            <TableRow key={ticket.empresa}>
                <TableCell onClick={() => redireccionTickets(ticket.id)}>{ticket.area}</TableCell>
                <TableCell>{ticket.cantidad_tickets}</TableCell>
                <TableCell>{ticket.cantidad_abiertos}</TableCell>
                <TableCell>{ticket.cantidad_resueltos}</TableCell>
                <TableCell><SemaforoTriple total={parseInt(ticket.cantidad_tickets)} abiertos={parseInt(ticket.cantidad_abiertos)} resueltos={parseInt(ticket.cantidad_resueltos)} /></TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};
  
export default TablaEmpresasAreas;