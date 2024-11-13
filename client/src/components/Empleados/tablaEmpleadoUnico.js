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

const TablaEmpleadoUnico = () => {
const [tickets, setTickets] = useState([]);

const url = new URL(window.location.href);
const empleado = url.searchParams.get('empleado');
const nombreEmpleado = atob(url.searchParams.get('nombre'));

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch(`http://localhost:9000/backend/Empleados/infoEmpleados.php?empleado=${empleado}`)
        .then(response => response.json())
        .then(data => setTickets(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    return (
        <>
            <Titulo titulo={`Información de Tickets de ${nombreEmpleado}`} />
            <Table>
            <TableCaption>Rojo: No fue abierto - Verde: Si fue abierto</TableCaption>
            <TableHeader style={styles.tableHeader}>
                <TableRow>
                    <TableHead style={styles.tableHead}>Nro. Ticket</TableHead>
                    <TableHead style={styles.tableHead}>Area</TableHead>
                    <TableHead style={styles.tableHead}>Empresa</TableHead>
                    <TableHead style={styles.tableHead}>Abierto</TableHead>
                    <TableHead style={styles.tableHead}>Fecha</TableHead>
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

export default TablaEmpleadoUnico;