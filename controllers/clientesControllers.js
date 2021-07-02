const clientesModel = require("../models/clientesModel.js")

exports.compilarListaUsuarios = () => {
    const listaUsuarios = clientesModel.retornarCadastroUsuarios();
    return listaUsuarios
    }
