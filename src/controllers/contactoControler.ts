import { RequestHandler, Request, Response } from "express";
import { contacto } from "../models/contacto"; 
 
 

//Create new contacto 
export const createContacto: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "El body no puede estar vacio", 
      payload: null, 
    }); 
  } 
// Save contacto in the database 
  const newContacto = { ...req.body }; 
  contacto.create(newContacto) 
    .then((data: contacto | null) => { 
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

// Get all contactos using Promises
export const getAllContactos: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM CONTACTO in a SQL query. 
   
   contacto.findAll() 
   .then((data: contacto[]) => { 
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


/// Get Contactos by Id 
export const getContactosById: RequestHandler = (req: Request, res: Response) => {
    //convierte el id que vuelve como string a number y confirma que sea un numero
    const id = Number(req.params.id); 
    if (isNaN(id)) {
    return res.status(400).json({
      status: "error",
      message: "El id debe ser un número válido",
      payload: null,
    });
  } 

  contacto.findByPk(id) 
  .then((data: contacto | null) => { 
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


///Modify contacto 
export const modifyContacto:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save contacto in the database 
  contacto.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Contacto actualizado exitosamente", 
        payload: { ...req.body }, 
      }); 
    } else { 
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

///Delete contact
export const deleteContacto: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const id = Number(req.params.id);
    try { 
      await contacto.destroy({ where: { id } }); 
      res.status(200).json({ message: "Contacto eliminado" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error al eliminar contacto", 
        error, 
      }); 
    } 
}; 


