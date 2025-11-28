import { Request, Response } from 'express'

export function show_adm(req: Request, res:Response) {
    const {usuario} = req as any;
res.render('dashboard', {usuario});
}