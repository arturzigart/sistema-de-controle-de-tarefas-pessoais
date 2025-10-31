
import { connection } from "../infra/connection";

export type Usuario = {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    create_date?: string;
}

//Funcionalidade (CRUDE)

//essa função insere um usuario no banco
export async function insert(usuario: Usuario) {
    await connection.query(
        'INSERT INTO user (nome, emai, senha ) VALUES ($1, $2, $3, $4);',
        [
            usuario.nome,
            usuario.email,
            usuario.senha,
         
        ]
    );
  
}
export async function updateById(usuario: Usuario) {
    await connection.query(
        'UPDATE users SET name=1$, password=$2, email=$3,  WHERE id =$44,',
        [
        usuario.nome,
        usuario.senha,
        usuario.email,
        usuario.id,
       
        ]
    )
}
export async function getByEmail (email: string) {
    const {rows} =  await connection.query(
        'SELECT * FROM usuario WHERE email=1$',
        [email]
    );
    return rows[0];
    
}

export async function getByEmailandSenha (email: string, senha: string) {
    const {rows} =  await connection.query(
        'SELECT * FROM usuario WHERE email=1$ and senha=$2',
        [email, senha]
    );
    return rows[0];
    
}