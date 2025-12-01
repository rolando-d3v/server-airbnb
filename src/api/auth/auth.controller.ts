import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

import {prisma} from '../../lib/db'




// const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
// const prisma = new PrismaClient({ adapter: pool })





// const prisma = new PrismaClient({
//     accelerateUrl: process.env.DATABASE_URL || '',
// });





export const login = async (req: Request, res: Response) => {

    // const xemail = req.body.email;
    // const xpassword = req.body.password;

    const authx = await prisma.user.findMany()


    console.log(authx);



    // const pass = await bcrypt.hash(xpassword, 10)


   res.json({
        email: "sfdfdf",
        password: "sdfsdf"
    });
};





export const register = (req: Request, res: Response) => {
    res.json({ message: "register" });
};







