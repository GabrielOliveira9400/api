import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import userRoutes from "./routes/users";
import carRoutes from "./routes/cars";
import loginRoutes from "./routes/login";
import employersRoutes from "./routes/employers";
import clientsRoutes from "./routes/clients";
import reservesRoutes from "./routes/reserves";
import categoriesRoutes from "./routes/categories";
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
server.use(carRoutes);
server.use(loginRoutes);
server.use(employersRoutes);
server.use(clientsRoutes);
server.use(reservesRoutes);
server.use(categoriesRoutes);
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});




server.listen(process.env.PORT || 3000);
