import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { sequelize } from '../instances/mysql';
import {User} from '../models/User'


export const home = async(req: Request, res: Response)=>{
    
    let usuarios = await User.findAll()
    res.render('pages/home', {
        usuarios 
    });
};