
import { Router, Request, Response } from 'express';  
const contactoRouter:Router = Router();  

contactoRouter.get('/', (req:Request, res:Response) => {  
res.send('devuelve lista de contactos')  
});  

contactoRouter.get('/:id', (req:Request, res:Response) => {  
res.send(`Devuelve un contacto ${req.params.id}`)  
});  

contactoRouter.post('/', (req:Request, res:Response) => {  
res.send(`Crea nuevo contacto con ID: ${req.body.id}`)  
});  

contactoRouter.patch('/:id', (req:Request, res:Response) => {  
res.send(`Actualiza datos del contacto ${req.params.id} con los valores: ${req.body.idEmpresa}, ${req.body.tipo} and ${req.body.contacto}`)  
});  

contactoRouter.delete('/', (req:Request, res:Response) => {  
res.send(`Deleting the product ${req.body.id}`)  
});  

export default contactoRouter; 

