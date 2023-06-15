import { Request, Response } from 'express';

export const login = async (req:Request,res:Response) => {
    let user = email.User.findOne();
    if (user) {
        return user;
    } else {
        throw new Error('Credenciais inválidas');
    }
}