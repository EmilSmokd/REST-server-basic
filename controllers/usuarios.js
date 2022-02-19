const { response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msj: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msj: 'post API - controlador',
        nombre,
        edad,
        
    });
}

const usuariosPut = (req = request, res = response) => {

    const { id } = req.params;

    res.json({
        msj: 'put API - controlador',
        id
    });
}

const usuariosPatch =  (req = request, res = response) => {
    res.json({
        msj: 'patch API - controlador'
    });
}

const usuariosDelete =  (req = request, res = response) => {
    res.json({
        msj: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}