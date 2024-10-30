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


    const redireccionAreas = (empresa) => {
      navigate(`./tablaEmpresasAreas?empresa=${(empresa)}`);
    };


    return (
        <Table>
        <TableCaption>Empresas</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Empresa</TableHead>
            <TableHead>Localidad</TableHead>
            <TableHead>Cantidad Tickets</TableHead>
            <TableHead>Abierto</TableHead>
            <TableHead>Resueltos</TableHead>
            <TableHead>Estado</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {empresas.map((empresa) => (
            <TableRow>
                <TableCell onClick={() => redireccionAreas(empresa.id)}>{empresa.empresa}</TableCell>
                <TableCell>{empresa.localidad}</TableCell>
                <TableCell>{empresa.cantidadTickets}</TableCell>
                <TableCell>{empresa.abiertos}</TableCell>
                <TableCell>{empresa.resueltos}</TableCell>
                <TableCell><SemaforoTriple total={parseInt(empresa.cantidadTickets)} abiertos={parseInt(empresa.abiertos)} resueltos={parseInt(empresa.resueltos)}/></TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
};
  
export default TablaEmpresas;