import { Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import  axios from "axios";
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
        nombre:'',
        apellido:''
    })

    const onChangeInput = ( event) => {
        setFormState((prev) => ({
            ...prev,
            [event.target.name] : event.target.value
        }));
    }

    const onSubmit = () => {
        console.log("llamando al api");
        axios.get("http://localhost:5050/ejemplo")
        .then(({data}) => {
            console.log("data",data);
        }).catch((e) => console.log("error",e))
    }

    useEffect(onSubmit,[]);

    return <Box>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField onChange={onChangeInput} name="nombre" label="Nombre" value={formState.nombre} />
            <TextField onChange={onChangeInput} name="apellido" label="Apellido" value={formState.apellido}/>
            <Button  onClick={()=> console.log("formState",formState)}>CREAR</Button>
        </form>
    </Box>
}