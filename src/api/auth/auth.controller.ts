import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../../lib/db'

import { var_env } from '../../config/var_env'


//? LOGIN APP
//? ***********************************************************************************************/
export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body


    try {

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


        const TK = jwt.sign(
            {id_user: emailExiste.id_user},
            var_env.SECRET_JWT,
            { expiresIn: "5h" }
        )


        res.json({ token: TK })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: "Error: server ❗️", error });

    }

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







