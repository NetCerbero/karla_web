import { Box, Button, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { UsuarioService } from "../../service/UsuarioService";
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function UsuarioCrear(props) {
    const classes = useStyles();
    const [formState, setFormState] = useState({
        nombre: '',
        apellido: ''
    })

    const onChangeInput = (event) => {
        setFormState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("formstate", formState);
        UsuarioService.create(formState)
            .then(({ data }) => {
                console.log("todo bien")
                window.location="/";
            }).catch((e) => {
                console.log("error crear usuario", e);
            })
    }

    return <Box m={5}>
        <Paper>
            <Box p={2}>
                <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={6} md={6}>
                            <TextField fullWidth={true} onChange={onChangeInput} name="nombre" label="Nombre" value={formState.nombre} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <TextField fullWidth onChange={onChangeInput} name="apellido" label="Apellido" value={formState.apellido} />
                        </Grid>
                    </Grid>


                    <Button variant="contained" color="primary" type="submit">CREAR</Button>
                </form>
            </Box>
        </Paper>
    </Box>
}