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
import TopMenu from '../barra';

const TablaEmpresas = () => {
const [empresas, setEmpresas] = useState([]);
const navigate = useNavigate();

    useEffect(() => {
    // Hacer una solicitud para obtener los datos desde el archivo PHP
    fetch('http://localhost:9000/backend/Empresas/infoEmpresas.php')
        .then(response => response.json())
        .then(data => setEmpresas(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    const redireccionAreas = (empresa, nombre) => {
      navigate(`./tablaEmpresasAreas?empresa=${(empresa)}&nombre=${btoa(nombre)}`);
    };


    return (
        <>
            <TopMenu />
            <Titulo titulo="Información de Tickets por Empresa" />
            <Table>
            <TableCaption>Rojo: menos de la mitad no fueron abiertos</TableCaption>
            <TableCaption>Amarillo: mas de la mitad fueron abiertos pero no todos fueron resueltos</TableCaption>
            <TableCaption>Verde: la mitad o mas fueron abiertos y todos estan resueltos</TableCaption>
            <TableHeader style={styles.tableHeader}>
                <TableRow>
                    <TableHead style={styles.tableHead}>Empresa</TableHead>
                    <TableHead style={styles.tableHead}>Localidad</TableHead>
                    <TableHead style={styles.tableHead}>Cantidad Tickets</TableHead>
                    <TableHead style={styles.tableHead}>Abierto</TableHead>
                    <TableHead style={styles.tableHead}>Resueltos</TableHead>
                    <TableHead style={styles.tableHead}>Estado</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {empresas.map((empresa) => (
                <TableRow>
                    <TableCell style={styles.selector} onClick={() => redireccionAreas(empresa.id, empresa.empresa)}>{empresa.empresa}</TableCell>
                    <TableCell>{empresa.localidad}</TableCell>
                    <TableCell>{empresa.cantidadTickets}</TableCell>
                    <TableCell>{empresa.abiertos}</TableCell>
                    <TableCell>{empresa.resueltos}</TableCell>
                    <TableCell><SemaforoTriple total={parseInt(empresa.cantidadTickets)} abiertos={parseInt(empresa.abiertos)} resueltos={parseInt(empresa.resueltos)}/></TableCell>
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
export default TablaEmpresas;