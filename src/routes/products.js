var express = require('express');
var router = express.Router();
const {detalle,editar,crear,update,store, products, remove} = require('../controllers/productControllers');
const uploat = require("../middlewares/subirArchivos")

router
    .get('/detalle/:id', detalle)
    .get('/editarProducto/:id', editar)
    .put('/update/:id', update)
    .get('/crearProducto', crear)
    .post('/store',uploat.single("imagen"), store)
    .get("/", products)
    .delete("/remove/:id", remove)

module.exports = router;
