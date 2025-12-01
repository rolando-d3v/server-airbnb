import { Request, Response } from 'express';


export const allUser = (req: Request, res: Response) => {
    res.json({ message: "allUser 2025" });
};





export const idUser = (req: Request, res: Response) => {
    res.json({ message: "idUser" });
};
