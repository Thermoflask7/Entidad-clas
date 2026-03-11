"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContacto = exports.modifyContacto = exports.getContactosById = exports.getAllContactos = exports.createContacto = void 0;
const contacto_1 = require("../models/contacto");
//Create new contacto 
const createContacto = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El body no puede estar vacio",
            payload: null,
        });
    }
    // Save contacto in the database 
    const newContacto = Object.assign({}, req.body);
    contacto_1.contacto.create(newContacto)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "contacto creado exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Un error ocurrio a la hora de intentar crear el contacto " + err.message,
            payload: null,
        });
    });
};
exports.createContacto = createContacto;
// Get all contactos using Promises
const getAllContactos = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM CONTACTO in a SQL query. 
    contacto_1.contacto.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "conseguido",
            message: "Contactos obtenidos exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "un error ocurrio al intentar obtener los contactos. " + err.message,
            payload: null,
        });
    });
};
exports.getAllContactos = getAllContactos;
/// Get Contactos by Id 
const getContactosById = (req, res) => {
    //convierte el id que vuelve como string a number y confirma que sea un numero
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({
            status: "error",
            message: "El id debe ser un número válido",
            payload: null,
        });
    }
    contacto_1.contacto.findByPk(id)
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Contacto obtenido exitosamente",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "un error ocurrio al intentar obtener el contacto " + err.message,
            payload: null,
        });
    });
};
exports.getContactosById = getContactosById;
///Modify contacto 
const modifyContacto = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save contacto in the database 
    contacto_1.contacto.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Contacto actualizado exitosamente",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Ocurrio un error al actualizar el contacto ",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Ocurrio un error al actualizar el contacto" + err.message,
            payload: null,
        });
    });
};
exports.modifyContacto = modifyContacto;
///Delete contact
const deleteContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        yield contacto_1.contacto.destroy({ where: { id } });
        res.status(200).json({ message: "Contacto eliminado" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al eliminar contacto",
            error,
        });
    }
});
exports.deleteContacto = deleteContacto;
//# sourceMappingURL=contactoControler.js.map