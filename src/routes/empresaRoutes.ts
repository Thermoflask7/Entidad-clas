import { Router } from 'express';
import { createEmpresa,
    deleteEmpresa,
    getAllEmpresas,
    getEmpresasById,
    modifyEmpresa
 } from '../controllers/empresaControler';
const empresaRouter:Router = Router();  

empresaRouter.get('/', getAllEmpresas);
empresaRouter.get('/:id', getEmpresasById);
empresaRouter.post('/', createEmpresa);
empresaRouter.patch('/:id', modifyEmpresa);
empresaRouter.delete('/:id', deleteEmpresa);



export default empresaRouter;