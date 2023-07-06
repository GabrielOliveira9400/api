import { Request, Response } from 'express';
import Category from '../models/Category';
import Car from '../models/Car';

export const allCategories = async (req:Request,res:Response) => {
    let users = await Category.find();
    res.json(users);
}

export const getCategory = async (req:Request,res:Response) => {
    try {
        let user = await Category.findById(req.params._id);
       res.status(200).json(user);
    }catch(error){
        res.status(404).json({error: error});
    }
}

export const carsByCategory = async (req:Request,res:Response) => {
    try {
        let user = await Car.find({
            categoria: { $regex: req.params._slug, $options: 'i' }
        });
       res.status(200).json(user);
    }catch(error){
        res.status(404).json({error: error});
    }
}