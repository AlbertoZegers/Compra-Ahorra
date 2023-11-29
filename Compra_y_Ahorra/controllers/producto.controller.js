const ProductoModel = require('./../models/Producto');

const getProductos = async (req, res) => {
    const productos = await  ProductoModel.findAll();
    res.json(productos);
}

const getProducto = async (req, res) => {
    const {id} = req.params
    try {
        const producto = await ProductoModel.findOne({
            where: {id}
        })
        res.send(producto)
    } catch (error){
        res.status(500).json({
            status: 500,
            response: error
        })
    }
}

const crearProducto = async (req, res) => {
    try {
        if( !req.body.nombre || 
            !req.body.stock || 
            !req.body.precio || 
            !req.body.fechaLlegada || 
            !req.body.descripcion
        ){
            res.status(401).json({
                status: 200,
                response: "Por favor ingresar todos los datos"
            });
        } else{
            const {nombre, stock, precio, fechaLlegada, descripcion} = req.body;
            await ProductoModel.create({
                nombre, stock, precio, fechaLlegada, descripcion 
            });
            res.status(200).json({
                status: 200,
                response: "¡Producto creado exitosamente!"
            });

        }
        
    } catch (error) {
        res.status(500).json({
            status: 500,
            response: error
        });
    }
    
}

module.exports = {crearProducto, getProducto, getProductos}