import { Request, Response } from 'express';
import { prisma } from '../../lib/db'




//? CREAR RENTA
//? ***********************************************************************************************/
export const createRenta =  async (req: Request, res: Response) => {


    const rentaCreate = await prisma.renta.findMany({})
    // const rentaCreate = await prisma.renta.findMany({})

    res.json({ message: "create renta" });
};





//? GET ALL RENTA
//? ***********************************************************************************************/
export const allRenta =  async (req: Request, res: Response) => {


    const rentaCreate = await prisma.renta.findMany({})
    // const rentaCreate = await prisma.renta.findMany({})

    res.json({ message: "all renta" });
};





//? UPDATE RENTA
//? ***********************************************************************************************/
export const updateRenta =  async (req: Request, res: Response) => {


    const rentaCreate = await prisma.renta.findMany({})
    // const rentaCreate = await prisma.renta.findMany({})

    res.json({ message: "updated renta" });
};






//? DELETE RENTA
//? ***********************************************************************************************/
export const deleteRenta =  async (req: Request, res: Response) => {


    const rentaCreate = await prisma.renta.findMany({})
    // const rentaCreate = await prisma.renta.findMany({})

    res.json({ message: " delete renta" });
};

