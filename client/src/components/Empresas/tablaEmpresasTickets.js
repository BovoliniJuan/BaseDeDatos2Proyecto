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
import Titulo from '../title';

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
        <>
            <Titulo titulo={`Información de Tickets de ${empresa} del area ${area}`} />
            <Table>
            <TableCaption>Tickets + Area + Empresa</TableCaption>
            <TableHeader style={styles.tableHeader}>
                <TableRow>
                    <TableHead style={styles.tableHead}>Nro. Ticket</TableHead>
                    <TableHead style={styles.tableHead}>Abierto</TableHead>
                    <TableHead style={styles.tableHead}>Resuelto</TableHead>
                    <TableHead style={styles.tableHead}>Fecha</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tickets.map((ticket) => (
                <TableRow key={ticket.nro_ticket}>
                    <TableCell>{ticket.nro_ticket}</TableCell>
                    <TableCell><SemaforoDoble status={parseInt(ticket.abierto)} /></TableCell>
                    <TableCell><SemaforoDoble status={parseInt(ticket.resuelto)} /></TableCell>
                    <TableCell>{ticket.fecha}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </>
    );
};
 
const styles = {
    tableHeader: {
        background: '#335c81',
        pointerEvents: 'none',
    },
    tableHead: {
        color: 'white',
    }
}

export default TablaEmpresasTickets;