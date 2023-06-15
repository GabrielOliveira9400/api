import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import mainRoutes from "./routes";
import userRoutes from "./routes/users";
import cors from 'cors';

import {mongoConnect} from "./database/mongo";
dotenv.config();
mongoConnect();
const server = express();
server.use(express.json());

/*server.use((req, res, next) => {

    console.log(JSON.stringify(req.body, null, 2));

    next();
});*/


server.use(express.urlencoded({extended: true}));

server.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }
));
server.use(userRoutes);
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});




server.listen(process.env.PORT);
