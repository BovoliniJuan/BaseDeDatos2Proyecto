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
import Titulo from '../title';

const TablaEmpresasAreas = () => {
const [tickets, setTickets] = useState([]);
const navigate = useNavigate();

const url = new URL(window.location.href);
const empresa = url.searchParams.get('empresa');
const nombreEmpresa = atob(url.searchParams.get('nombre'));

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch(`http://localhost:9000/backend/Empresas/infoEmpresas.php?empresa=${empresa}`)
        .then(response => response.json())
        .then(data => setTickets(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const redireccionTickets = (area, nombreArea) => {
        navigate(`./tablaEmpresasTickets?empresa=${empresa}&area=${(area)}&nombreArea=${btoa(nombreArea)}&nombreEmpresa=${btoa(nombreEmpresa)}`);
      };

    return (
        <>
            <Titulo titulo={`Información de Tickets de ${nombreEmpresa}`} />
            <Table>
            <TableCaption>Rojo: menos de la mitad no fueron abiertos</TableCaption>
            <TableCaption>Amarillo: mas de la mitad fueron abiertos pero no todos fueron resueltos</TableCaption>
            <TableCaption>Verde: la mitad o mas fueron abiertos y todos estan resueltos</TableCaption>
            <TableHeader style={styles.tableHeader}>
                <TableRow>
                    <TableHead style={styles.tableHead}>Area</TableHead>
                    <TableHead style={styles.tableHead}>Cantidad</TableHead>
                    <TableHead style={styles.tableHead}>Abiertos</TableHead>
                    <TableHead style={styles.tableHead}>Resueltos</TableHead>
                    <TableHead style={styles.tableHead}>Resueltos</TableHead>
                    <TableHead style={styles.tableHead}>Estado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tickets.map((ticket) => (
                <TableRow key={ticket.empresa}>
                    <TableCell style={styles.selector} onClick={() => redireccionTickets(ticket.id, ticket.area)}>{ticket.area}</TableCell>
                    <TableCell>{ticket.cantidad_tickets}</TableCell>
                    <TableCell>{ticket.cantidad_abiertos}</TableCell>
                    <TableCell>{ticket.cantidad_resueltos}</TableCell>
                    <TableCell><SemaforoTriple total={parseInt(ticket.cantidad_tickets)} abiertos={parseInt(ticket.cantidad_abiertos)} resueltos={parseInt(ticket.cantidad_resueltos)} /></TableCell>
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
    },
    selector: {
        cursor: 'pointer',
    }
}

export default TablaEmpresasAreas;