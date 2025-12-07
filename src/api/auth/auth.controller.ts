import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

import { prisma } from '../../lib/db'



//? LOGIN APP
//? ***********************************************************************************************/
export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body



    const emailExiste = await prisma.user.findFirst({
        where: { email: email }
    })

    // valida  email
    if (!emailExiste) {
        return res.status(404).json({
            msg: "Error No existe email"
        })
    }


    // valida password
    const passwordExiste = await bcrypt.compare(password, emailExiste.password)

    if (!passwordExiste) {
        return res.status(404).json({
            msg: "Error en el Password"
        })

    }



    res.json({ token: "454dfgfghfgh54fgh54fg54hf5g4hgfghfhfgdfgjdgk" })

};




//? REGISTER USER
//? ***********************************************************************************************/
export const register = async (req: Request, res: Response) => {



    const xemail = req.body.email;
    const xpassword = req.body.password;
    const xname = req.body.name;


    const pass = await bcrypt.hash(xpassword, 10)



    const createUser = await prisma.user.create(
        {
            data: {
                email: xemail,
                password: pass,
                name: xname
            }
        }
    )



    res.status(201).json({
        msg: "create success",
        user_create: createUser
    });
};







