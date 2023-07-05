import { Request, Response } from 'express';
import Employer from '../models/Employer';

export const addEmployer = async (req:Request,res:Response) => {
    let newEmployer = new Employer();
    newEmployer.name = req.body.name;
    try{
        await newEmployer.save();
        console.log('Funcionario adicionado corretamente!');
        res.status(201).json(newEmployer);
    }
    catch(error){
        console.log('Erro ao adicionar o Funcionario - ', error)
        res.status(500).json({error: error});
    }
};

export const allEmployers = async (req:Request,res:Response) => {
    let employers = await Employer.find();
    res.json(employers);
}

export const getEmployer = async (req:Request,res:Response) => {
    try {
        let employer = await Employer.findById(req.params._id);
       res.status(200).json(employer);
    }catch(error){
        res.status(404).json({error: error});
    }
}

export const removeEmployer = async (req:Request,res:Response) => {
    try {
        await Employer.deleteOne({_id: req.params._id});
        res.status(200).json({message: 'Funcionario removido com sucesso!'});
    }catch(error){
        res.status(404).json({error: error});
    }
}