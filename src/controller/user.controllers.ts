import { Request, Response } from "express";
import { Usuario, getByEmail, getByEmailandSenha, insert } from "../model/user";


export function show_login(req: Request, res: Response) {
    res.render('login', { response: null })
}

export async function cadastrar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.render('login', {
            response: {
                type: 'erro',
                value: 'Preencha os campos corretamente'
            }
        });
    }

    const userFound = await getByEmail(email);

    if (userFound) {
        return res.render('login', {
            response: {
                type: 'erro',
                value: 'Email já cadastrado'
            }
        });
    }


    const usuario: Usuario = {
        nome,
        email,
        senha,
    }

    await insert(usuario);

    return res.render('login', {
        response: {
            type: 'sucesso',
            value: 'Usuário cadastrado com sucesso'
        }
    });
}

export async function login(req: Request, res : Response){
    const{ email, senha}= req.body

    if ( !email || !senha) {
        return res.render('login', {
            response: {
                type: 'error',
                value: 'Preencha os campos corretamente'
            }
        });
    }


  const usuario =  await getByEmailandSenha(email, senha);

  if(!usuario){
    return res.render("login",{
        response:{
            type: 'erro',
            value: 'Email ou senha invaliade'
        }
    })
  }

  (req.session as any).usuario = {
  nome: usuario.nome,
  email: usuario.email,
  id: usuario.id
  }
  res.redirect('/adm');
}