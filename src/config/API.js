const HOST = "http://localhost:5050";

function h(uri){
    return HOST +'/' + uri;
}

export const API={
    USUARIO:{
        GET : h("usuario"), // http://localhost:5050/usuario
        DELETE: h("usuario/:id"),// http://localhost:5050/usuario/identificado_documento
        CREATE: h("usuario")
    }
}