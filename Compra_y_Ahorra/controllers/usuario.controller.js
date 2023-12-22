const UsuarioModel = require('./../models/Usuarios');
const { LocalStorage } = require('node-localstorage');
const sha256 = require('js-sha256');

const localStorage = new LocalStorage('./local');

const crearUsuario = async (req, res) => {
    try {
        const {usuario, contraseña, email, rol} = req.body;
        const hash = sha256.create();
        hash.update(contraseña);
        const contraseñaEncriptada = hash.hex();
        await UsuarioModel.create({
            usuario, contraseñaEncriptada, email, rol
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
        const hash = sha256.create();
        hash.update(contraseña);
        const contraseñaEncriptada = hash.hex();
        const user = await UsuarioModel.findOne({
            where: {usuario, contraseñaEncriptada}
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