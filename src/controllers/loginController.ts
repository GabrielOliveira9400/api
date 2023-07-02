import { Request, Response } from 'express';
import User from '../models/User';
export const login = async (req:Request,res:Response) => {
    let user = User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        return user;
    } else {
        throw new Error('Credenciais inválidas');
    }
}