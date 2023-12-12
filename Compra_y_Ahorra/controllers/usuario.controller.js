const UsuarioModel = require('./../models/Usuarios');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./local');

const crearUsuario = async (req, res) => {
    try {
        const {usuario, contraseña, email} = req.body;
        await UsuarioModel.create({
            usuario, contraseña, email
        });
        res.status(200).json({
            status: 200,
            response: "¡Usuario creado exitosamente!"
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            response: error
        });
    }
}

const logearUsuario = async (req, res) => {
    try {
        const {usuario, contraseña} = req.body;
        const user = await UsuarioModel.findOne({
            where: {usuario, contraseña}
        })
        localStorage.setItem("Usuario", user.usuario);
        res.send(user)
    } catch (error) {
        res.status(500).json({
            status: 500,
            response: error
        });
    }
}

module.exports = {crearUsuario, logearUsuario};