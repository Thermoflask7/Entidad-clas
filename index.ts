
import express, {Express, Request, Response} from 'express'; 
import morgan from 'morgan';
import contactoRouter from './src/routes'; 

const app:Express = express();
const port = 3000

app.use(morgan('dev')) 
app.use(express.json());
app.get('/', (rreq:Request, res:Response) => { 
    res.send('Hello World!') 
}) 
app.get('/contactos', (req:Request, res:Response) => { 
    res.send('contactos!!!!') 
}) 
app.get('/contactos/:id', (req:Request, res:Response) => { 
    res.send(req.params.id) 
}) 
app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`) 
})
