import { Router, Request, Response } from 'express';
import contactoRouter from './contactoRoutes';  
import empresaRouter from './empresaRoutes';  

const apiRouter:Router = Router();  

apiRouter.use('/contactos', contactoRouter);  
apiRouter.use('/empresas', empresaRouter)

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('server up!')  
})  

export default apiRouter;