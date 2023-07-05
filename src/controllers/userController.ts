import { Request, Response } from 'express';
import User from '../models/User';

export const addUser = async (req:Request,res:Response) => {
    let newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    try{
        await newUser.save();
        console.log('Usuário adicionado corretamente!');
        res.status(201).json(newUser);
    }
    catch(error){
        console.log('Erro ao adicionar o usuário - ', error)
        res.status(500).json({error: error});
    }
};

export const allUsers = async (req:Request,res:Response) => {
    let users = await User.find();
    res.json(users);
}

export const getUser = async (req:Request,res:Response) => {
    try {
        let user = await User.findById(req.params._id);
       res.status(200).json(user);
    }catch(error){
        res.status(404).json({error: error});
    }
}

export const removeUser = async (req:Request,res:Response) => {
    try {
        await User.deleteOne({_id: req.params._id});
        res.status(200).json({message: 'Usuário removido com sucesso!'});
    }catch(error){
        res.status(404).json({error: error});
    }
}