

module.exports = {
    detalle : (req, res) => {
        return res.render('detalleDeProducto')
    },
    editar : (req, res) => {
        return res.render('editarProducto')
    },
    crear : (req, res) => {
        return res.render('crearProducto')
    }
}