import { Router, Request, Response } from 'express';  
const empresaRouter:Router = Router();  

empresaRouter.get('/', (req:Request, res:Response) => {  
res.send('devuelve lista de emrpesas')  
});  

empresaRouter.get('/:id', (req:Request, res:Response) => {  
res.send(`Devuelve una empresa ${req.params.id}`)  
});  

empresaRouter.post('/', (req:Request, res:Response) => {  
res.send(`Crea nueva empresa con ID: ${req.body.id}`)  
});  

empresaRouter.patch('/:id', (req:Request, res:Response) => {  
res.send(`Actualiza datos de la empresa ${req.params.id} con los valores: ${req.body.nombre} and ${req.body.descripcion}`)  
});  

empresaRouter.delete('/', (req:Request, res:Response) => {  
res.send(`Borra objeto empresa de id ${req.body.id}`)  
});  

export default empresaRouter;