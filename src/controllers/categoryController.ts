import { Request, Response } from 'express';
import Category from '../models/Category';

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