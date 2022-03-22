import { Box } from "@material-ui/core";
import { useState } from "react";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
export default function Usuario(props) {
    const classes = useStyles();
    const [listUsuario, setListUsuario] = useState([
        {
            id: 1,
            nombre: 'Luis Yerko',
            apellido: 'Laura Tola'
        },
        {
            id: 2,
            nombre: "karla",
            apellido: "nogales"
        },
        {
            id: 1,
            nombre: 'Luis Yerko',
            apellido: 'Laura Tola'
        },
        {
            id: 2,
            nombre: "karla",
            apellido: "nogales"
        }, {
            id: 1,
            nombre: 'Luis Yerko',
            apellido: 'Laura Tola'
        },
        {
            id: 2,
            nombre: "karla",
            apellido: "nogales"
        }, {
            id: 1,
            nombre: 'Luis Yerko',
            apellido: 'Laura Tola'
        },
        {
            id: 2,
            nombre: "karla",
            apellido: "nogales"
        }

    ]);

    const ViewTable = () => {
        return <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">NOMBRE</TableCell>
                        <TableCell align="right">APELLIDO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listUsuario.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.nombre}</TableCell>
                            <TableCell align="right">{row.apellido}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    }
    return <Box>
        <List component="nav" aria-label="main mailbox folders">
            {listUsuario.map((e) => {
                return <ListItem button onClick={() => alert(e.id)}>
                    <ListItemText primary={e.nombre + " " + e.apellido} />
                </ListItem>
            })}
        </List>
        {ViewTable()}  
    </Box>
}