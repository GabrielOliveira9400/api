import { Request, Response } from 'express';
import Car from '../models/Car';

export const addCar = async (req:Request,res:Response) => {
    let newCar = new Car();

    let caracteristicas = {
        tracao: req.body.tracao,
        combustivel: req.body.combustivel,
        ano: req.body.ano,
        transmissao: req.body.transmissao,
        cor: req.body.cor
    }
    newCar = Object.assign(newCar, req.body);
    newCar.caracteristicas = caracteristicas;
    try{
        await newCar.save();
        console.log('Carro adicionado corretamente!');
        res.status(201).json(newCar);
    }
    catch(error){
        console.log('Erro ao adicionar o carro - ', error)
        res.status(500).json({error: error});
    }
};

export const allCars = async (req:Request,res:Response) => {
    let cars = await Car.find();
    res.json(cars);
}

export const getCar = async (req:Request,res:Response) => {
    try {
        let car = await Car.findById(req.params._id);
       res.status(200).json(car);
    }catch(error){
        res.status(404).json({error: error});
    }
}

export const removeCar = async (req:Request,res:Response) => {
    try {
        await Car.deleteOne({_id: req.params._id});
        res.status(200).json({message: 'Carro removido com sucesso!'});
    }catch(error){
        res.status(404).json({error: error});
    }
}