import axios from "axios";
import { API } from "../config/API";

export class UsuarioService{
    static get(){
        return axios.get(API.USUARIO.GET);
    }

    static create(data){
        return axios.post(API.USUARIO.CREATE,{...data});
    }
}