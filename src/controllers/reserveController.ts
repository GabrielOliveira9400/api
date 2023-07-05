import { Request, Response } from 'express';
import Reserve from '../models/Reserve';

export const addReserve = async (req:Request,res:Response) => {
    let newReserve = new Reserve();
    newReserve.value = req.body.value;
    newReserve.nameClient = req.body.nameClient;
    newReserve.dateInitial = req.body.dateInitial;
    newReserve.dateFinal = req.body.dateFinal;
    newReserve.carModel = req.body.carModel;
    newReserve.carPlate = req.body.carPlate;
    try{
        await newReserve.save();
        console.log('Reserva adicionada corretamente!');
        res.status(201).json(newReserve);
    }
    catch(error){
        console.log('Reserva não realizada', error)
        res.status(500).json({error: error});
    }
};

export const reserveByEmail = async (req:Request,res:Response) => {
    let users = await Reserve.find({
        email: req.body.email,
    });
    res.json(users);
}

export const getReserve = async (req:Request,res:Response) => {
    try {
        let user = await Reserve.findById(req.params._id);
       res.status(200).json(user);
    }catch(error){
        res.status(404).json({error: error});
    }
}
