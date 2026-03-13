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
const sequelize_typescript_1 = require("sequelize-typescript");
const contacto_1 = require("../models/contacto");
const empresa_1 = require("../models/empresa");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'directorio_clas',
    dialect: 'postgres',
    username: 'clas_user',
    password: '123456',
    storage: ':memory:',
    models: [contacto_1.contacto, empresa_1.empresa]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate(); // authenticate verifica la conexión
            console.log("Conexión exitosa a la base de datos MySQL.");
            yield connection.sync();
        }
        catch (e) {
            console.log("Error al conectar con la base de datos:", e);
        }
    });
}
exports.default = connectionDB;
//# sourceMappingURL=connection.js.map