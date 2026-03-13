
import { Router } from 'express';
import { createContacto,
    deleteContacto,
    getAllContactos,
    getContactosById,
    modifyContacto
 } from '../controllers/contactoControler'; 

const contactoRouter:Router = Router();  

contactoRouter.get('/', getAllContactos);
contactoRouter.get('/:id', getContactosById);
contactoRouter.post('/', createContacto);
contactoRouter.patch('/:id', modifyContacto);
contactoRouter.delete('/:id', deleteContacto);

export default contactoRouter;
