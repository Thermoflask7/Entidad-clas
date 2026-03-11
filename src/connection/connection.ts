import { Sequelize } from "sequelize-typescript";
import { contacto } from "../models/contacto";
import { empresa } from "../models/empresa";

const connection = new Sequelize({ 
  database: 'directorio_clas', 
  dialect: 'postgres',
  username: 'clas_user', 
  password: '123456', 
  storage: ':memory:', 
  models: [ contacto, empresa] 
}); 



async function connectionDB() {
  try {
    await connection.authenticate(); // authenticate verifica la conexión
    console.log("Conexión exitosa a la base de datos MySQL.");
    await connection.sync();
  } catch (e) {
    console.log("Error al conectar con la base de datos:", e);
  }
}

export default connectionDB;

