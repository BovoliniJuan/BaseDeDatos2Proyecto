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

const TablaTickets = () => {
const [tickets, setTickets] = useState([]);
const navigate = useNavigate(); // Importar useNavigate para redirección

const url = new URL(window.location.href);
const empresaEncoded = url.searchParams.get('empresa');
const empresa = empresaEncoded ? empresaEncoded : '';

    useEffect(() => {
        // Hacer una solicitud para obtener los datos desde el archivo PHP
        fetch('http://localhost:9000/backend/Tickets/infoTickets.php')
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    navigate('/');
            }   else {
                    setTickets(data);
                }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
    }, [navigate]); 


    return (
        <Table>
        <TableCaption>Tickets</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Nro. Ticket</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Abierto</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Ver</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tickets.map((ticket) => (
            <TableRow key={ticket.nro_ticket}>
                <TableCell >{ticket.nro_ticket}</TableCell>
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
  
export default TablaTickets;