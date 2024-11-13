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
import Titulo from '../title';

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


    const redireccionTickets = (empleado, nombre) => {
      navigate(`./tablaEmpleadoUnico?empleado=${(empleado)}&nombre=${btoa(nombre)}`);
    };


    return (
        <>
            <Titulo titulo="Información de Tickets por Empleados" />
            <Table>
            <TableCaption>Rojo: menos de la mitad fueron contestados</TableCaption>
            <TableCaption>Verde: mas de la mitad fueron contestados</TableCaption>
            <TableHeader style={styles.tableHeader}>
                <TableRow>
                    <TableHead style={styles.tableHead}>Id</TableHead>
                    <TableHead style={styles.tableHead}>Nombre</TableHead>
                    <TableHead style={styles.tableHead}>Apellido</TableHead>
                    <TableHead style={styles.tableHead}>DNI</TableHead>
                    <TableHead style={styles.tableHead}>Tickets contestados</TableHead>
                    <TableHead style={styles.tableHead}>Estado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {empleados.map((empleado) => (
                <TableRow>
                    <TableCell style={styles.selector} onClick={() => redireccionTickets(empleado.id, empleado.nombre)}>{empleado.id}</TableCell>
                    <TableCell>{empleado.nombre}</TableCell>
                    <TableCell>{empleado.apellido}</TableCell>
                    <TableCell>{empleado.dni}</TableCell>
                    <TableCell>{empleado.cantidad_tickets_contestados}</TableCell>
                    <TableCell><SemaforoDoble status={parseInt(empleado.cantidad_tickets_contestados)}/></TableCell>
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


export default TablaEmpleados;