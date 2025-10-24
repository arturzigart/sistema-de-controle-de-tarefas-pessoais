import { Request, Response } from "express";
import { User, getByEmail, insert } from "../model/user";


export function show_login(req: Request, res: Response) {
    res.render('login', { response: null })
}

export async function email(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Preencha os campos corretamente'
            }
        });
    }

    const userFound = await getByEmail(email);

    if (userFound) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Email já cadastrado'
            }
        });
    }


    const user: User = {
        name,
        email,
        password,
    }

    await insert(user);

    return res.render('login', {
        response: {
            type: 'success',
            value: 'Usuário cadastrado com sucesso'
        }
    });
}
