import { RequestHandler, Request, Response } from "express";
import { empresa } from "../models/empresa"; 
 
 

//Create new empresa 
export const createEmpresa: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "El body no puede estar vacio", 
      payload: null, 
    }); 
  } 
// Save empresa in the database 
  const empresa = { ...req.body }; 
  empresa.create(empresa) 
    .then((data: empresa | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "objeto empresa creado exitosamente", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Un error ocurrio a la hora de intentar crear la empresa " + err.message, 
         payload: null, 
       }); 
    }); 
}; 

// Get all empresas using Promises
export const getAllEmpresas: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM EMPRESA in a SQL query. 
   
   empresa.findAll() 
   .then((data: empresa[]) => { 
      return res.status(200).json({ 
         status: "conseguido", 
           message: "Empresas obtenidas exitosamente", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "un error ocurrio al intentar obtener als empresas. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 


/// Get Empresas by Id 
export const getEmpresasById: RequestHandler = (req: Request, res: Response) => {
    //convierte el id que vuelve como string a number y confirma que sea un numero
    const id = Number(req.params.id); 
    if (isNaN(id)) {
    return res.status(400).json({
      status: "error",
      message: "El id debe ser un número válido",
      payload: null,
    });
  } 

  empresa.findByPk(id) 
  .then((data: empresa | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Empresa obtenida exitosamente", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "un error ocurrio al intentar obtener la Empresa " + err.message, 
      payload: null, 
    }); 
  }); 
}; 


///Modify empresa 
export const modifyEmpresa:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save empresa in the database 
  empresa.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Empresa actualizado exitosamente", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Ocurrio un error al actualizar el empresa ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Ocurrio un error al actualizar la empresa" + err.message, 
      payload: null, 
  }); 
}); 
}; 

///Delete empresa
export const deleteEmpresa: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const id = Number(req.params.id);
    try { 
      await empresa.destroy({ where: { id } }); 
      res.status(200).json({ message: "Empresa eliminado" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error al eliminar empresa", 
        error, 
      }); 
    } 
}; 
