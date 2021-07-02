const listaServicos = require("../models/servicosModel.js")

exports.compilarListaServicos = taxadeDesconto => {
    const listaServicos = servicosModel.retornarListaServicos();
    return listaServicos.map(itemDeServico => ({
        ...itemDeServico,
        preco: itemDeServico.preco *(1 - taxadeDesconto)
    }))
}