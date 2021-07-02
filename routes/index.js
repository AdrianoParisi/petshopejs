const express = require('express');
const router = express.Router();

const servicosController = require("../controllers/servicoControllers")
const clientesController = require("../controllers/clientesControllers")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/servicos/", (req, res) =>{
  const{ taxadeDesconto } = req.query
  const listadeServicoscomDesconto = servicosController.compilarListaServicos(taxadeDesconto);
  res.render("listadeServicos", { listadeServicoscomDesconto })
})

router.get('/usuarios', (req, res) => {
  res.render('listadeUsuarios', clientesController.compilarListaUsuarios);
});


module.exports = router;
