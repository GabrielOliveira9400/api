import { Request, Response } from 'express';
import Client from '../models/Client';

export const addClient = async (req:Request,res:Response) => {
    let newClient = new Client();
    newClient = Object.assign(newClient, req.body);
    try{
        await newClient.save();
        console.log('Cliente adicionado corretamente!');
        res.status(201).json(newClient);
    }
    catch(error){
        console.log('Erro ao adicionar o Cliente - ', error)
        res.status(500).json({error: error});
    }
};

export const allClients = async (req:Request,res:Response) => {
    let clients = await Client.find();
    res.json(clients);
}

export const getClient = async (req:Request,res:Response) => {
    try {
        let client = await Client.findById(req.params._id);
       res.status(200).json(client);
    }catch(error){
        res.status(404).json({error: error});
    }
}

export const removeClient = async (req:Request,res:Response) => {
    try {
        await Client.deleteOne({_id: req.params._id});
        res.status(200).json({message: 'Cliente removido com sucesso!'});
    }catch(error){
        res.status(404).json({error: error});
    }
}