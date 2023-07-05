import { Request, Response } from 'express';
import User from '../models/User';
export const login = async (req:Request,res:Response) => {
    let user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    console.log(user);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({error: 'Usuário não encontrado.'});
    }
}